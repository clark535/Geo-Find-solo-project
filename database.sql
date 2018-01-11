database name: geo-find

CREATE TABLE countries (
id SERIAL PRIMARY KEY,
country VARCHAR(120) not null UNIQUE,
flag VARCHAR(120),
image1 VARCHAR(120),
image2 VARCHAR(120),
video VARCHAR(120),
order_id VARCHAR(5)
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
userName VARCHAR(80) not null UNIQUE,
password VARCHAR(80) not null
);

CREATE TABLE junction (
user_id VARCHAR(80),
country_id VARCHAR(80)
);