import { env } from 'process'
import express from 'express'
import { randomBytes } from 'crypto'
import { MongoClient } from 'mongodb'

const port = 'HIT_COUNTER_PORT' in env ? env.HIT_COUNTER_PORT : 8080
const hostname = 'HOSTNAME' in env ? env.HOSTNAME : 'localhost'
const serverName = randomBytes(8).toString('hex') // 8-char random string
const serverID = `${serverName}@${hostname}:${port}`

const mongoHost = 'MONGO_HOST' in env ? env.MONGO_HOST : "localhost"
const mongoPort = 'MONGO_PORT' in env ? env.MONGO_PORT : 27017
const mongoUser = 'MONGO_USER' in env ? env.MONGO_USER : "admin"
const mongoPassword = 'MONGO_PASSWORD' in env ? env.MONGO_PASSWORD : "admin"
const mongoConnection = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}`;
const mongClient = new MongoClient(mongoConnection);

const server = express()
 
server.get('/', async (req, res) => {
  try {
    await mongClient.connect()
    let database = mongClient.db("hit-counter2")
    let hits = database.collection('hits')

    await hits.insertOne({hitby: serverID})
    let count = await hits.countDocuments()

    res.send(`[${serverID}] Hit ${count} times`)
  } catch (e) {
    res.send(e.toString())
  } finally {
    await mongClient.close()
  }
})
 
console.log(`Service ${serverID} listening on ${hostname}:${port}`)
server.listen(port)
