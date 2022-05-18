const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// create schema name, email, photo, password, passwordConfirm
const userSchema = new mongoose.Schema({
  CreatedAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  email: {
    type: String,
    required: [true, 'A user must procide a user email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  name: {
    type: String,
    required: [true, 'A user must provide a user name'],
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [10, 'A passowrd must contain a minimum of 10 characters'],
    maxlength: [20, 'A passowrd must contain a minimum of 20 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // NOTE: This only works on create & save
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not matching',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  accountActive: {
    type: Boolean,
    default: true,
    select: false,
  },
  photo: String,
});

userSchema.pre('save', async function (next) {
  // Only run function if password was modified
  if (!this.isModified('password')) return next();

  // Hash password 12 at cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirmed field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});
// only query users that are active
userSchema.pre(/^find/, function (next) {
  this.find({ accountActive: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  canidatePassword,
  userPassword
) {
  return await bcrypt.compare(canidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimeStamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // add 10 minutes to datetime
  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
