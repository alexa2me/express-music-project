-- 1. Users
CREATE TABLE users_fullstack (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  nickname VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- 2. Songs
CREATE TABLE songs_fullstack (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  file VARCHAR(255) NOT NULL,
  album VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(author) REFERENCES users_fullstack(id)
);

-- 3. Genres
CREATE TABLE genres_fullstack (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name VARCHAR(255) UNIQUE NOT NULL
);

-- 4. Songs' genres	
CREATE TABLE songs_genres_fullstack (
  song_id VARCHAR(255) NOT NULL,
	genre_id VARCHAR(255) NOT NULL,
  PRIMARY KEY(genre_id, song_id),
	FOREIGN KEY(genre_id) REFERENCES genres_fullstack(id),
  FOREIGN KEY(song_id) REFERENCES songs_fullstack(id)
);