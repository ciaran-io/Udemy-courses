const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// Server start
const port = process.env.PORT || 8000;

app.listen(port);
