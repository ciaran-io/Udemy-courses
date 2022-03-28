-- create employers table
CREATE TABLE employers (
  company_name VARCHAR(255),
  company_address VARCHAR(300),
  -- yearly_revenue FLOAT(5,2) Aproximate value
  yearly_revenue NUMERIC(5, 2), -- Exact value
  is_hiring BOOLEAN
);