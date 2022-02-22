import { Container } from 'components/layout/Container/Container';
import { SocketContext } from 'context/SocketContext';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MatchStyles from './Match.styles';

export const Match: React.FC = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const socketContext = useContext(SocketContext);

  const handleCancelGame = () => {
    socketContext?.socket?.emit('cancel-game', gameId);
    navigate('/game');
  };

  /*  useEffect(() => {
    return () => {
      console.log('clean');
      socketContext?.socket?.emit('cancel-game', gameId);
    };
  }, [socketContext?.socket, gameId]); */

  /* useEffect(() => {
    socketContext?.socket?.on('joined-game', (game) => {
      console.log(game);
    });
  }, [socketContext?.socket]); */

  /* useEffect(() => {
    socketContext?.socket?.on('canceled-game', () => {
      console.log('game canceled');
      navigate('/game');
    });
  }, [socketContext?.socket, navigate]); */

  return (
    <MatchStyles>
      <Container>
        <h1>You are in a room with id {gameId}</h1>
        <button type='button' onClick={handleCancelGame}>
          Cancel Game
        </button>
      </Container>
    </MatchStyles>
  );
};
