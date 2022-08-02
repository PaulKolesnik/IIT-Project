import { Server } from 'socket.io'
import http from 'http'

const socketServer = (server: http.Server): Server => {
    const io = new Server(server);
    io.on('connection', (socket) => {
        console.log('User Connected');
        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });
    });
    return io
}

export = socketServer