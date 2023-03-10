### Hello future colleagues!

This mini-coding challenge is meant for you to showcase your experience with ExpressJS, NodeJS and MongoDB. It is recommended that you use a free instance of MongoDB (https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/) for this exercise.

Presented here is a simple, outdated, CRUD application that serves the front end application: https://ttc-coding-challenge-d641d.web.app/

For this exercise, you are required to:

- [x] Add the ability to mark a particular notification as read based on `_id`
- [x] Retrieve an individual notification based on `_id`
- [x] Refactor this application to modernize the server architecture, using your current best practices and knowledge. For this you are not limited in scope of what to improve, do what you feel is best.

This exercise is to take at most 3 hour of development time.

To help you on this task, we have included the SwaggerDocs UI being served from the `/` route: `http://localhost:3000/` and a function to seed
notifications in the database `npm run seed`

> Note: StackBlitz web-container does not currently support connections to MongoDB, so you must clone the project locally to run it.

### Configure

1. Update `config/local.json` and set `MONGO_HOST` to be the connection string for your mongodb server (eg. starting with `mongodb+srv://`)

### Running

- To seed your database with notifications: `npm run seed`
- To generate the swagger docs: `npm run swagger`
- To run the server (with nodemon): `npm run start`
  - The server will come up on `http://localhost:3000`

### Questions

Any questions can be sent to Andrew at `awright@tenthousandcoffees.com` or Cherifta at `cherifta@tenthousandcoffees.com`

### GIT Repo

Please find the git repo https://github.com/madhur2308/node-pnb45a that has the most recent code

### Changes

- Added new endpoints
- Updated the functionality of an existing endpoint (count of unread notifications)
- Also created 2 set of endpoints to handle data when it is too much (getUnreadNotifications and getAllNotifictaions that allows us to paginate over the results)
- migrated the code base from using JS to TS
