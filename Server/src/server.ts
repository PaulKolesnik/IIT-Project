import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('Connected to MongoDB')
})
const cors = require("cors");

app.use(cors());
app.options('*', cors());
import bodyparser from 'body-parser'
app.use(bodyparser.urlencoded({ extended: true, limit: '12mb' }))
app.use(bodyparser.json())

import auth_route from './routes/auth-routes'
app.use('/auth', auth_route);
import post_route from './routes/post-routes'
app.use('/post', post_route)
import profile_route from './routes/profile-routes'
app.use('/profile', profile_route)



import http from 'http';
const server = http.createServer(app);
export = server;