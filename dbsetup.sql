DROP TABLE IF EXISTS animals ; 
CREATE TABLE animals ( id SERIAL, name VARCHAR NOT NULL ); 
INSERT INTO animals(name) VALUES ('cat');