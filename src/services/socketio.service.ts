import { io } from 'socket.io-client';
import { store } from '../store';

class SocketService {
  private socket!: ReturnType<typeof io>;

  setupConnection() {
    this.socket = io(import.meta.env.VITE_SOCKET_ENDPOINT);
    this.socket.on('connect', () => {
      store.commit('socket/setSocketId', this.socket.id);
    });
  }
}

export default new SocketService();
