-- INITIALLY set not null value to full_name
CREATE TABLE users (
  full_name VARCHAR(255) NOT NULL
);

-- postgres syntax
-- Modify comlumn
ALTER TABLE users 
  ALTER COLUMN full_name set NOT NULL;

--mysql syntax
MODIFY COLUMN full_name VARCHAR(300) NOT NULL;

