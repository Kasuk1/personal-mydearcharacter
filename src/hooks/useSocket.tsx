import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface useSocketProps {
  socket: Socket | null;
  online: boolean | undefined;
  connectSocket: () => void;
  disconnectSocket: () => void;
}

export const useSocket: (serverPath: string) => useSocketProps = (
  serverPath
) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [online, setOnline] = useState<boolean | undefined>(false);

  const connectSocket = useCallback(() => {
    const token = window.localStorage.getItem('token');

    const socketTemp = io(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': token,
      },
    });

    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  };
};
