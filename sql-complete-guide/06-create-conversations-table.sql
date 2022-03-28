CREATE TABLE conversations (
  user_name VARCHAR(200),
  employer_name VARCHAR(250),
  message TEXT, -- TEXT has no characters limit
  date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);