import { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { SocketContext } from "./SocketContext";
import { useSocket } from "hooks/useSocket";
import {
  getMatches,
  getMatchesByUserId,
  setActiveMatch,
  selectUser,
  setCardMatchSelected,
} from "features";

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    `${process.env.REACT_APP_SOCKET}`
  );
  const dispatch = useAppDispatch();
  const { isLogged, uid } = useAppSelector(selectUser);

  useEffect(() => {
    isLogged && connectSocket();
  }, [isLogged, connectSocket]);

  useEffect(() => {
    !isLogged && disconnectSocket();
  }, [isLogged, disconnectSocket]);

  useEffect(() => {
    socket?.on("games-list", () => {
      dispatch(getMatches());
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("joined-game", (game) => {
      dispatch(setActiveMatch(game));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("canceled-game", () => {
      dispatch(setActiveMatch(undefined));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("started-game", (game) => {
      dispatch(setActiveMatch(game));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("selected-card", (game) => {
      dispatch(setCardMatchSelected(false));
      dispatch(setActiveMatch(game));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("finished-game", () => {
      dispatch(setActiveMatch(undefined));
      dispatch(getMatchesByUserId(uid!));
    });
  }, [socket, dispatch, uid]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
