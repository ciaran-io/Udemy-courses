-- create employers table
CREATE TABLE employers (
  company_name VARCHAR(255),
  company_address VARCHAR(300),
  -- yearly_revenue FLOAT(5,2) Aproximate value
  yearly_revenue NUMERIC(5, 2), -- Exact value
  is_hiring BOOLEAN DEFAULT FALSE
);

CREATE TABLE conversations (
  user_name VARCHAR(200),
  employer_name VARCHAR(250),
  message TEXT, -- TEXT has no characters limit
  date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);