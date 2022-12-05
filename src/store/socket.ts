export interface SocketState {
  socketId: string | null;
  localStream: string | null;
  remoteStream: string | null;
  screenSharingStream: string | null;
  allowConnectionsFromStrangers: boolean;
  screenSharingActive: boolean;
}

export default {
  namespaced: true,
  state: (): SocketState => ({
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowConnectionsFromStrangers: false,
    screenSharingActive: false,
  }),
  getters: {
    socketId: (state: SocketState) => state.socketId,
    localStream: (state: SocketState) => state.localStream,
    remoteStream: (state: SocketState) => state.remoteStream,
    screenSharingStream: (state: SocketState) => state.screenSharingStream,
    allowConnectionsFromStrangers: (state: SocketState) => state.allowConnectionsFromStrangers,
    screenSharingActive: (state: SocketState) => state.screenSharingActive,
  },
  mutations: {
    setSocketId(state: SocketState, socketId: string) {
      state.socketId = socketId;
    },
    setLocalStream(state: SocketState, localStream: string) {
      state.localStream = localStream;
    },
    setRemoteStream(state: SocketState, remoteStream: string) {
      state.remoteStream = remoteStream;
    },
    setScreenSharingStream(state: SocketState, screenSharingStream: string) {
      state.screenSharingStream = screenSharingStream;
    },
    setAllowConnectionsFromStrangers(state: SocketState, allowConnectionsFromStrangers: boolean) {
      state.allowConnectionsFromStrangers = allowConnectionsFromStrangers;
    },
    setScreenSharingActive(state: SocketState, screenSharingActive: boolean) {
      state.screenSharingActive = screenSharingActive;
    },
  },
};
