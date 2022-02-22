import { createContext, useEffect } from 'react';
import { useSocket } from 'hooks/useSocket';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectUser } from '../features/authentication/authentication.slice';
import { Socket } from 'socket.io-client';
import { getMatches, setActiveMatch } from 'features/game/game.slice';

export interface SocketContextValue {
  socket: Socket | null;
  online: boolean | undefined;
}

export const SocketContext = createContext<SocketContextValue | null>(null);

export const SocketProvider: React.FC = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    'http://localhost:8080'
  );
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector(selectUser);

  useEffect(() => {
    isLogged && connectSocket();
  }, [isLogged, connectSocket]);

  useEffect(() => {
    !isLogged && disconnectSocket();
  }, [isLogged, disconnectSocket]);

  useEffect(() => {
    socket?.on('games-list', (matches) => {
      console.log(matches);
      dispatch(getMatches());
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('joined-game', (game) => {
      dispatch(setActiveMatch(game));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('canceled-game', () => {
      dispatch(setActiveMatch(undefined));
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
