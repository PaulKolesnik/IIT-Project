import { Server } from 'socket.io'
import http from 'http'

const socketServer = (server: http.Server): Server => {
    const io = new Server(server);
    io.on('connection', (socket) => {
        console.log('User Connected');
        // Disconnect Event
        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });
        // Echo Event
        socket.on('echo', (msg) =>{
            console.log("Echo Event: " + msg)
            socket.emit('echo', msg)
        }) 
    });
    return io
}

export = socketServer