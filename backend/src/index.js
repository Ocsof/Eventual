//import { env } from 'process'
const port = 8080//'HIT_COUNTER_PORT' in env ? env.EVENTUAL_NODE_PORT : 8080
const hostname = 'localhost'//'HOSTNAME' in env ? env.HOSTNAME : 'localhost'

const mongoHost = "mongodb"//'MONGO_HOST' in env ? env.MONGO_HOST : "localhost"
const mongoPort = 27017 //'MONGO_PORT' in env ? env.MONGO_PORT : 27017
const mongoConnection = `mongodb://${mongoHost}:${mongoPort}/test`

//const mongClient = new MongoClient(mongoConnection);
const mongoose = require('mongoose');
//import mongoose from 'mongoose';
mongoose.connect(mongoConnection)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

/*
mongoose.connection.on('open', function () {
  mongoose.connection.db.admin().listDatabases(function (err, dbs) {
    console.log(dbs.databases);
  });
});
*/

const cors = require('cors');
const express = require('express');
const server = express()
server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
const bodyParser = require('body-parser') //todo l'ho dovuta scaricare per il test con Postman, verificare se serve anche per frontend
server.use(bodyParser.json())

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



