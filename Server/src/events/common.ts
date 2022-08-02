import { Server, Socket } from 'socket.io'

export = (io: Server, socket: Socket) => {
    const echoHandler = (msg) => {
        socket.emit("common:echo", msg)
    }

    socket.on("common:echo", echoHandler)
}