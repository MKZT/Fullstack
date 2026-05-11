CREATE DATABASE events_board;

USE events_board;

CREATE TABLE events (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    description TEXT NOT NULL,

    location VARCHAR(255) NOT NULL,

    event_date DATE NOT NULL,

    image VARCHAR(255) NOT NULL

);