# Library Management API

## Description

This is a Node.js-based RESTful API for Library Management. It uses the Express framework and PostgreSQL for data storage.

## Database Schema

You can find the database schema from [here](https://drawsql.app/teams/yasin-6/diagrams/library-management).

## Installation

1. Clone the repository:

``` BASH
git clone https://github.com/ysntrkc/library-management-api.git
```

2. Install dependencies:

``` BASH
npm install
```

3. Create database:

``` BASH
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Create .env file in the root directory and add the following:

``` BASH
PORT=5000
NODE_ENV=development

SESSION_SECRET={{your-session-secret}}
SESSION_LIFETIME={{session-lifetime-in-milliseconds}}

DATABASE_NAME=quiz-app
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_HOST=127.0.0.1
DATABASE_DIALECT=postgres
```

5. Run the server:

``` BASH
npm start
```

## Usage

You can see endpoints by running the server and going to `http://localhost:5000/api-docs/`.