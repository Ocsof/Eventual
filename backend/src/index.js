//import { env } from 'process'
const port = 8080//'HIT_COUNTER_PORT' in env ? env.EVENTUAL_NODE_PORT : 8080
const hostname = 'localhost'//'HOSTNAME' in env ? env.HOSTNAME : 'localhost'

const mongoHost = "localhost"//'MONGO_HOST' in env ? env.MONGO_HOST : "localhost"
const mongoPort = 27017 //'MONGO_PORT' in env ? env.MONGO_PORT : 27017
const mongoUser = "admin" //'MONGO_USER' in env ? env.MONGO_USER : "admin"
const mongoPassword = "admin" //'MONGO_PASSWORD' in env ? env.MONGO_PASSWORD : "admin"
const mongoConnection = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}`;

//const mongClient = new MongoClient(mongoConnection);
const mongoose = require('mongoose');
//import mongoose from 'mongoose';
mongoose.connect(mongoConnection)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const express = require('express');
const server = express()

const routesEvent = require('./routes/eventRoute.js');
routesEvent(server);
const routesUser = require('./routes/userRoute.js')
routesUser(server)

server.get('/', (req, res) => {
  res.send("ciaooooo")
})


console.log(`Service listening on ${hostname}:${port}`)
server.listen(port, ()=>{
  console.log('Listening on port: ' + port)
})
