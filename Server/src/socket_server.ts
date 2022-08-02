import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import http from 'http'
const server = http.createServer(app);
import { Server } from 'socket.io'
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('User Connected');
    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});

server.listen(process.env.PORT, () => {
    console.log('Listening On Port: ' + process.env.PORT);
});