DROP DATABASE IF EXISTS tshirt;
CREATE DATABASE tshirt;

\c tshirt;

CREATE TABLE tshirt (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  picture VARCHAR,
  price INTEGER
);

INSERT INTO tshirt (name, picture, price)
  VALUES ('Nandoz Tshirt - Ultra Mission', 'https://cdn.dribbble.com/users/2478685/screenshots/4944218/ultramission_1x.jpg', 150);
  INSERT INTO tshirt (name, picture, price)
  VALUES ('Nandoz Tshirt - Long Island', 'https://cdn.dribbble.com/users/2478685/screenshots/4944217/long_island_1x.jpg', 250);
  INSERT INTO tshirt (name, picture, price)
  VALUES ('Nandoz Tshirt - I Love My Life', 'https://cdn.dribbble.com/users/2478685/screenshots/4944215/ilovemylife_1x.jpg', 300);
  INSERT INTO tshirt (name, picture, price)
  VALUES ('Nandoz Tshirt - Abstract Of Life', 'https://cdn.dribbble.com/users/2478685/screenshots/4944211/abstractoflife_1x.jpg', 120);