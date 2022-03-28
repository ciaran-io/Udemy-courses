CREATE TABLE sales (
  id INT PRIMARY KEY AUTO_INCREMENT -- MySQL
  -- id SERIAL PRIMARY KEY, -- Postgres
  date_created DATE DEFAULT (CURRENT_DATE),
  date_fulfilled DATE,
  customer_name VARCHAR(300) NOT NULL,
  product_name VARCHAR(300) NOT NULL,
  sales_total NUMERIC(7, 2) NOT NULL CHECK (sales_total >= 0),
  is_recurring BOOLEAN DEFAULT FALSE,
  is_disputed BOOLEAN DEFAULT FALSE
);