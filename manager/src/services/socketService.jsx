import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:8000';

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect() {
    const token = localStorage.getItem('access_token');
    this.socket = io(SOCKET_URL, {
      auth: { token },
      autoConnect: false,
    });
    this.socket.connect();
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  onNotification(callback) {
    if (this.socket) {
      this.socket.on('notification', callback);
    }
  }
}

export default new SocketService();
