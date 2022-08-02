import { Server } from 'socket.io'
import http from 'http'
import commonHandlers from './events/common'

const socketServer = (server: http.Server): Server => {
    const io = new Server(server);
    io.on('connection', (socket) => {
        console.log('User Connected');
        // Disconnect Event
        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });
        // Handlers
        commonHandlers(io, socket)
    });
    return io
}

export = socketServer