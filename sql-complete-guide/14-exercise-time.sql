-- 1. create a new database for the store
-- 2. add a table for products
-- 3. Choose the appropiate column names + data TYPES
-- 4. Insert dummy data into create table
-- 5. update table and add sensible contraints
-- 6. update table and add primary key

-- data base Online Shop --> Products [procuct name, price,
-- description, ammount in stock, image ]

-- create new products table

-- CREATE TABLE IF NOT EXISTS products (
--   product_name VARCHAR(300) NOT NULL,
--   product_price DECIMAL(5,2) NOT NULL,
--   product_description TEXT NOT NUll,
--   product_count SMALLINT NOT NULL,
--   product_image VARCHAR(500) NOT NULL
-- );

-- update products table

-- INSERT INTO products (product_id INT(1) NOT NULL AUTO_INCREMENT)
-- VALUES(1)

-- INSERT into products 
-- ( product_name,
--   product_price,
--   product_description,
--   product_count, product_image
--   )

-- VALUES 
-- ( 'Gym shoes',
--   16.44,
--   'New shoes for gym',
--   4,
--   'image/runners.jpg'
-- );



-- update a column

-- UPDATE products
-- SET product_price = 16.00
-- WHERE product_name = 'Gym shoes'


-- add contraints to columns

-- ALTER TABLE products
-- MODIFY COLUMN product_price NUMERIC(5,2) NOT NULL CHECK (product_price > 0),
-- MODIFY COLUMN product_image VARCHAR(500),
-- MODIFY COLUMN product_count SMALLINT CHECK (product_count > 0);

-- ALTER TABLE products
-- ADD COLUMN id INT PRIMARY KEY AUTO_INCREMENT;
