DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS employers;
DROP TABLE IF EXISTS conversations;

-- postgresql
-- CREATE TYPE employment_status AS ENUM('employed', 'self-employed', 'unemployed');

CREATE TABLE users (
  id INT primary key auto_increment, -- MySQL add primary key with auto increment
  -- id SERIAL PRIMARY KEY, -- Postgresql add primary key

  first_name VARCHAR(200) NOT NULL, -- add full name 300 bytes
  last_name VARCHAR(200) NOT NULL, -- add full name 300 bytes
  full_name VARCHAR(401) GENERATED ALWAYS AS (CONCAT(first_name, ' ', last_name) -- MYSQL syntax, -- add full name 
  yearly_salary INT CHECK( yearly_salary > 0), -- add yearly salary greater than zero
  current_status ENUM('employed', 'self-employed', 'unemployed') -- MySQL
  -- current_status employment_status -- Postgresql
);

CREATE TABLE employers (
  id INT primary key auto_increment, --  MySql add primary key with auto
  -- id SERIAL PRIMARY KEY, -- Postgresql add primary key
  company_name VARCHAR(300) NOT NULL, -- add company name
  company_address VARCHAR(300) NOT NULL, -- add company address
  yearly_revenue FLOAT CHECK(yearly_revenue > 0),
  is_hiring BOOLEAN DEFAULT FALSE
);

CREATE TABLE conversations(
  id INT primary key auto_increment, -- MySQL add primary key with auto
  -- id SERIAL PRIMARY KEY, -- Postgresql add primary key
  user_id INT,
  employer_id INT, -- add employee
  message TEXT NOT NULL, -- add message
  date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- add date
)