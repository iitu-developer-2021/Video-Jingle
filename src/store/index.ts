import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import type { SocketState } from './socket';
import socketState from './socket';

export interface State {
  socket: SocketState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    socket: socketState,
  },
});
