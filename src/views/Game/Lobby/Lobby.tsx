import { useAppSelector, useAppDispatch } from 'app/hooks';
import { LobbyItem } from 'components/Game/LobbyItem';
import { Container } from 'components/layout/Container/Container';
import { SocketContext } from 'context/SocketContext';
import { selectUser } from 'features/authentication/authentication.slice';
import {
  getMatches,
  selectMatches,
  setActiveMatch,
} from 'features/game/game.slice';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LobbyStyles from './Lobby.styles';

export const Lobby: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const socketContext = useContext(SocketContext);
  const matches = useAppSelector(selectMatches);

  useEffect(() => {
    socketContext?.socket?.on('created-game', (game) => {
      console.log(game);
      dispatch(setActiveMatch(game));
      navigate(`/game/${game._id}`);
    });
  }, [socketContext?.socket, navigate, dispatch]);

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  useEffect(() => {
    socketContext?.socket?.on('joined-game', (game) => {
      console.log(game);
      navigate(`/game/${game._id}`);
    });
  }, [socketContext?.socket, navigate]);

  useEffect(() => {
    socketContext?.socket?.on('canceled-game', () => {
      navigate('/game');
    });
  }, [socketContext, navigate]);

  const handleCreateRoom = () => {
    socketContext?.socket?.emit('create-game');
  };

  return (
    <LobbyStyles>
      <Container>
        <h1>Lobby here</h1>
        <button type='button' onClick={handleCreateRoom}>
          Create room
        </button>
        <div>
          {matches?.map((match) => (
            <LobbyItem key={match._id} match={match} />
          ))}
        </div>
      </Container>
    </LobbyStyles>
  );
};
