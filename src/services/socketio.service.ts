import { io } from "socket.io-client";

class SocketService{
    private socket!: ReturnType<typeof io>

    setupConnection(){
        this.socket = io(import.meta.env.VITE_SOCKET_ENDPOINT, {
            transports: ['websocket']
        })
    }

    checkConnection(){
        this.socket.on('connect', () => {
            console.log("I am connected: ", this.socket.id)
        })
    }
}


export default new SocketService()
