create database 'dars-12';

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(50),
  city VARCHAR(50)
);

INSERT INTO customers (full_name, city) VALUES
('Ali Karimov', 'Toshkent'),
('Dilshod Rahmonov', 'Samarqand'),
('Malika Ismoilova', 'Buxoro'),
('Jasur Abdullayev', 'Andijon'),
('Nodira Qodirova', 'Fargona'),
('Sherzod Torayev', 'Namangan'),
('Aziza Yoldosheva', 'Xiva'),
('Bekzod Sattorov', 'Navoiy'),
('Madina Usmonova', 'Qarshi'),
('Rustam Jorayev', 'Urganch');

INSERT INTO products (name, price) VALUES
('Non', 3000),
('Sut', 8000),
('Shakar', 12000),
('Yog', 18000),
('Tuz', 2000),
('Guruch', 15000),
('Choy', 25000),
('Qahva', 40000),
('Un', 9000),
('Tuxum', 10000),
('shokolad',120000);


create table orders(
    id serial,
    user_id int references users(id),
    amount decimal not null,
    created_at timestamp default now()
);

insert into orders(user_id, amount,created_at) values
(4, 100.50,'2024-03-01 10:00:00'),
(2, 200.75,'2025-01-02 11:30:00'),
(1, 150.00,'2024-03-03 09:15:00'),
(3, 300.20,'2025-01-04 14:45:00'),
(4, 250.00,'2024-01-05 16:20:00'),
(2, 175.25,'2024-02-06 12:10:00'),
(5, 400.00,'2025-05-07 13:50:00'),
(6, 500.50,'2025-06-08 15:30:00'),
(7, 600.75,'2024-05-09 17:40:00'),
(8, 700.80,'2025-01-10 18:55:00'),
(9, 800.90,'2024-02-11 19:05:00'),
(10, 900.00,'2024-01-12 20:15:00');

CREATE Table If not EXISTS order_items(id serial PRIMARY KEY, order_id int REFERENCES orders(id), product_id int REFERENCES products(id), quantity int DEFAULT 1);

INSERT INTO order_items (order_id, product_id, quantity) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 5),
(2, 4, 2),
(3, 5, 1),
(3, 6, 3),
(4, 7, 2),
(4, 8, 1),
(5, 9, 4),
(5, 10, 2),
(6, 1, 1),
(6, 2, 2),
(7, 3, 3),
(7, 4, 1),
(8, 5, 2),
(8, 6, 1),
(9, 7, 3),
(9, 8, 2),
(10, 9, 1),
(10, 10, 5),
(11, 1, 2),
(12, 2, 3),
(13, 3, 1),
(14, 4, 2),
(15, 5, 1),
(16, 6, 2),
(17, 7, 3),
(18, 8, 1),
(19, 9, 2),
(20, 10, 4);


-- 1.1
SELECT * FROM customers;

-- 1.2
SELECT * FROM customers WHERE city='Toshkent'

-- 1.3
SELECT * FROM products WHERE price>=100000;

-- 1.4
SELECT * FROM products ORDER BY price DESC;

-- 1.5
SELECT city FROM customers GROUP BY city HAVING COUNT(city)=1;
-- 1.6
SELECT *
FROM orders
WHERE order_data >= NOW() - INTERVAL '30 days';

-- 2.1
select count(id) from orders;

-- 2.2
SELECT city,COUNT(id) from customers GROUP BY city;

-- 2.3
SELECT pr.name,COUNT(oi.product_id) from products pr 
LEFT JOIN order_items oi on pr.id=oi.product_id 
GROUP BY pr.id,pr.name;

-- 2.4
SELECT MAX(price) FROM products;
SELECT MIN(price) FROM products;

-- 2.5
SELECT order_id,SUM(quantity) from order_items GROUP BY order_id;

-- 2.6
SELECT pr.name
FROM products pr
LEFT JOIN order_items oi ON pr.id = oi.product_id
GROUP BY pr.id, pr.name
HAVING COUNT(oi.product_id) > 1;
-- oddiy variant
SELECT product_id FROM order_items GROUP BY product_id HAVING COUNT(product_id)>1;

-- 3.1
SELECT cs.full_name, o.id FROM orders o JOIN customers cs on o.customer_id=cs.id;

-- 3.2
SELECT oi.id,pr.name,oi.quantity from products pr JOIN order_items oi on pr.id=oi.product_id;
-- 3.3 va 3.4
SELECT oi.id,pr.name,(SUM(oi.quantity)*pr.price) as total_price from order_items oi 
JOIN products pr on oi.product_id=pr.id GROUP BY oi.id,pr.name;

-- 3.5
SELECT cs.full_name,o.order_data from orders o JOIN customers cs on o.customer_id=cs.id;

-- 3.6
SELECT cs.full_name from customers cs JOIN orders o on cs.id=o.customer_id;

-- 3.7 oxirigacha yetmagan 

SELECT o.id as order_id, SUM(oi.quantity) from order_items oi 
JOIN orders o on oi.order_id=o.id 
GROUP BY o.id ;
