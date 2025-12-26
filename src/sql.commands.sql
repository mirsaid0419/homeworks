--  meni data bazamda quyidagicha tablelar mavjud
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    phone VARCHAR(20),
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

-- posts table quyidagicha
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    userId INT REFERENCES users(id) ON DELETE CASCADE
);
