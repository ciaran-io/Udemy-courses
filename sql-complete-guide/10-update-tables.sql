
-- POSTGRES Syntax
-- ALTER TABLE employers
-- ALTER COLUMN yearly_revenue SET DATA TYPE FLOAT -- Postgresql syntax

-- ALTER TABLE employers
-- ALTER COLUMN yearly_revenue SET DATA TYPE FLOAT; 

-- CHANGE USER FULL_NAME MAX LENGTH 
-- ALTER TABLE users
-- ALTER COLUMN full_name SET DATA TYPE VARCHAR(300); 


-- MYSQL syntax
-- CHANGE USER FULL_NAME MAX LENGTH 

ALTER TABLE users
MODIFY COLUMN full_name VARCHAR(300); 

-- ALTER TABLE employers
-- MODIFY COLUMN yearly_revenue FLOAT(5,2); 

