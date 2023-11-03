import { createContext } from 'react';
import { Socket } from 'socket.io-client';

export interface SocketContextValue {
  socket: Socket | null;
  online: boolean | undefined;
}

export const SocketContext = createContext<SocketContextValue | null>(null);
