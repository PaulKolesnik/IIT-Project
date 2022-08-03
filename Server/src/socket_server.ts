import { Server } from 'socket.io'
import http from 'http'
import commonHandlers from './events/common'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const socketServer = (server: http.Server): Server => {
    const io = new Server(server);

    io.use(async (socket, next) => {
        let token = socket.handshake.auth.token;
        if(token == null) {
            return next(new Error('Authentication error'))
        }
        token = token.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return next(new Error('Authentication error'));
            } 
            else {
                socket.data.user = user._id
                return next()
            }
        })
    });

    io.on('connection', (socket) => {
        console.log('User Connected');
        // Disconnect Event
        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });
        // Events Handlers
        commonHandlers(io, socket)
    });
    return io
}

export = socketServer