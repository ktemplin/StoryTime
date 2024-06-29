DROP TABLE IF EXISTS users, themes, stories;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  username VARCHAR(32) UNIQUE,
  password VARCHAR(16000) NOT NULL,
  email VARCHAR(50) UNIQUE,
  created_on TIMESTAMP DEFAULT current_timestamp,
  last_access_date TIMESTAMP DEFAULT NULL,
  subscription VARCHAR(128) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE themes (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  title VARCHAR(50),
  key_words VARCHAR(640),
  PRIMARY KEY (id)
);

CREATE TABLE stories (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  vars VARCHAR(512),
  seed INT,
  created_on TIMESTAMP DEFAULT current_timestamp,
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE,
  FOREIGN KEY (seed)
  REFERENCES themes (id)
    ON DELETE CASCADE,
  PRIMARY KEY (id)
);

INSERT INTO users
	(first_name, last_name, username, password, email)
VALUES 
  ("James","Butt", "jbutt", "drowsapp", "notanemail@notgmail.com");

INSERT INTO themes
	(title, key_words)
VALUES 
  ("Space","Rockets, Aliens, Galactic, Adventure");


INSERT INTO stories
	(user_id, vars, seed)
VALUES 
  (1,"James, Alone, Sleep, Uplifting",1);
