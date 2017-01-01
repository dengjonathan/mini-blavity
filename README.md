# MINI-BLAVITY

## Summary
This is a Node server (with RESTful API) and skeleton front-end for a news site
serving a single article.

## Dependencies
This package requires Redis as an in-memory cache.  

The server uses Express 4 (with Express Router), Bluebird (for Promise support)
and socket.io to create a more responsive connection to the client.

The client side app was scaffolded with Create React App.

## Getting Started

After downloading the package, run the following commands to run:

### Install Server Dependencies
`npm install`

### Install Client Dependencies
Both the client and server have their own package.json and manage their own 
dependencies
`cd client & npm install & cd ..`

### Start local Redis server
Either pass in the port as an env variable (this app defaults to sending Redis requests
to http://127.0.0.0.1:6379)
`redis-server`

### Run Server tests
`npm run test`

### Start Server
`npm start`

The server will now be listening on either the port specified in an environment variable
or http://127.0.0.0.1:8080

## Endpoints

__GET /__ - get the main client side app, connected by web socket to 
  the server

__GET /articles/:id__ - get the html text of the article whose id is in the request params
  Currently the only article available is 'plane-crash'

__POST /articles/:id__ - update the article with this id, this will: 
  1. increment the articles current latest version (i.e. from version 1 to version 2)
  2. update the cache with the text of the latest article (for faster serving)
  3. broadcast the change to all connected clients
  4. create a persisted copy of the update on disk


  
