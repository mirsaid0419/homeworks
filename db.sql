create database 'dars-12';

SHOW TABLES

create table users(
    id serial primary key,
    username varchar(20) not null unique,
    age int not null
);

create table orders(
    id serial,
    user_id int references users(id),
    amount decimal not null,
    created_at timestamp default now()
);

insert into users(username, age) values
('alice1', 30),
('bob2', 30),
('charlie2', 35),
('david2', 28),
('eve2', 22),
('frank2', 40),
('grace2', 27),
('heidi2', 33),
('ivan2', 29),
('judy2', 31);

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
