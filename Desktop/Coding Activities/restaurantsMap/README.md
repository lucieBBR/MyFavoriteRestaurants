# Full-Stack Map App

- A map application with pins to my 5 favorite restaurants.

![App screenshot](./public/images/appScreenshot.png)

The application consists of:

- API written in node.js that with an endpoint returning information (including coordinates) of the restaurants.

- Frontend app that queries the backend and shows a map using a leaflet library, with Pins on the locations of the 5 restaurants. 

## Technologies used

* Node.js with Express.js on the backend
* MySQL for database
- React.js for Frontend
* The JavaScript [Leaflet](https://leafletjs.com) mapping library
* NPM package [React Leaflet](https://react-leaflet.js.org/)
* [OpenStreetMap](https://www.openstreetmap.org/) to get the coordinates
* [Unsplash](https://unsplash.com/) for images 

## Setup

### Install dependencies

- Run `npm run install` both in project and client directory.

### Database Prep

- Create a database called `NomokoTaskLB` through your SQL cli.

- Create a .env file in the project directory and add the info below; Make sure to change the DB_USER and DB_PASS to the username and password to your SQL cli :

      ```
      DB_HOST=localhost 
      DB_NAME=NomokoTaskLB
      DB_USER=USER_NAME
      DB_PASS=YOUR_PASSWORD
      ```

Run `npm run migrate` in your terminal in the project folder in order to create `favRestaurants` table in the database.

### Run Your Development Servers

- Run `npm run start` in project directory to start the Express server on port 5000
- `cd client` and run `npm run start` to start client server in development mode on port 3000.