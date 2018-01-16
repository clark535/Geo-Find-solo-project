# Geo-Find

Geo-Find is an educational tool geared at teaching children about geography and international culture.
The target demographic are young students ages 3-8. The main view has a large map of the Earth displayed with five national flags on the right hand side. When a student clicks on the flag they are take to a zoomed in view of that country, while also hearing a synthesised voice speak the countryies name. On the zoom view the student can click on images and video icons to see preloaded pictures of the country and a youTube video. The teacher view requires a login, then the teacher is take to a view where they can add a new country object with a flag of their choice, two images and a youTube video. They can also choose wich five country flags are displayed on the world view so they can change up which countries they are teaching at any time. There is also an option to delete a country.

 Link to the live version of the app if it's hosted on Heroku.

## Built With

I used the following technologies to build this web application:

SQL for the database.                 Filestack API
AngularJs                             GoogleMaps Static API
Express                               Speech Sythesis
Node                                  Angular-Route
Bootstrap                             Passport for Auth


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [AngularJs](https://angularjs.org/)
- [Express](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [PostgresSQL](https://www.postgresql.org/)
- [Filestack] (https://www.filestack.com/)
- [GoogleMaps Static API] (https://google-developers.appspot.com/maps/documentation/static-maps/)

- To run the application as your own you will need a GoogleMaps API key and a Filestack API key;
   however, for testing and demo purposes you can use the keys provided here. 

### Installing

Steps to get the development environment running.

```sql
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
```
Junction table not recommended for optimal UI as it will prevent teachers/parents from sharing resources/lesson plans. 

## Screen Shot

![Screen-shot](Geo-Find-world-view-sceen.png)
![Screen-shot2](Geo-Find-Zoom-view.png)

## Authors

* Dave Clark


## Acknowledgments

* Country Flags.com for all the flag images https://www.countryflags.com/en/image-overview/
