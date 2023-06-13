
## About the project

This project applies some concepts like State management, Dockerizing,  Routing management, Unit tests and API requests.

The goal of this project is to apply these concepts in order to provide an SPA web application which consumes a [Back-end server located in this repository](https://github.com/lash23/files-reader-back-end) in order to list the data provided through API calls.

## Technologies

1. React.
2. Redux.
3. Jest for unit test development
4. Vite for dev environment management
5. Bootstrap.
6. Docker & Docker compose

## Prerequisites
1. Node installed on the system.
2. npm installed on the system and using a version greater than or equal to 5.2.
3. Docker (optional)

## Usage

1. Install the project dependencies by running: `npm install`
2. Run tests: `npm run test`
3. Start front-end app: `npm run start` (front-end server will run at http://127.0.0.1/:5173/ unless your 5173 port were already busy)

### Run using Docker
Optionally you could start the front-end server using Docker by running: `docker-compose up --build` (then front-end server will run at http://127.0.0.1/:5173/)
