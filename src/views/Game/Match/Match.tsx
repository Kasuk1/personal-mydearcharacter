import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAstronaut,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'components/layout/Container/Container';
import { SocketContext } from 'context/SocketContext';
import MatchStyles from './Match.styles';
import { selectUser } from 'features/authentication/authentication.slice';
import { selectActiveMatch } from 'features/game/game.slice';
import { MatchCard } from 'components/Game/MatchCard/MatchCard';
import { MatchCardHidden } from 'components/Game/MatchCardHidden/MatchCardHidden';
import { ProgressBar } from 'components/Game/Mini/ProgressBar';

export const Match: React.FC = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const { uid } = useAppSelector(selectUser);
  const activeMatch = useAppSelector(selectActiveMatch);
  const socketContext = useContext(SocketContext);

  const handleCancelGame = () => {
    socketContext?.socket?.emit('cancel-game', gameId);
    navigate('/game');
  };

  const handlePlayGame = () => {
    socketContext?.socket?.emit('play-game', gameId);
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
        <div className='match min-height-70'>
          <div className='match__headers'>
            <h1>{activeMatch?.player1.nickname}'s Room</h1>
            {activeMatch?.player1?.uid === uid && (
              <button type='button' onClick={handleCancelGame}>
                Leave Room
              </button>
            )}
          </div>
          {activeMatch?.player1 && (
            <h2 className='match__player'>
              <FontAwesomeIcon icon={faUserAstronaut} />{' '}
              {activeMatch?.player1.nickname}'s Deck
              <ProgressBar
                basis={activeMatch?.player1?.level * 3000}
                health={activeMatch?.healthPlayer1}
              />
            </h2>
          )}
          <div className='match__deck'>
            {activeMatch?.player1?.uid === uid
              ? activeMatch?.deckPlayer1?.map((card) => (
                  <MatchCard key={card._id} card={card} />
                ))
              : activeMatch?.deckPlayer1?.map((card) => (
                  <MatchCardHidden key={card._id} img={card.image} />
                ))}
          </div>

          <div className='match__state'>
            {activeMatch?.status === 'waiting' && (
              <span className='match__state-message'>
                Waiting for another player...
              </span>
            )}
            {activeMatch?.status === 'full' && (
              <span className='match__state-message'>
                Waiting for player 1 to start...
              </span>
            )}
            {activeMatch?.status === 'playing' &&
              activeMatch?.turns % 2 !== 0 && (
                <span className='match__state-message'>
                  {activeMatch?.player1.nickname} turn!
                </span>
              )}
            {activeMatch?.status === 'playing' &&
              activeMatch?.turns % 2 === 0 && (
                <span className='match__state-message'>
                  {activeMatch.player2?.nickname} turn!
                </span>
              )}

            {activeMatch?.status === 'full' &&
              activeMatch?.player1?.uid === uid && (
                <button
                  className='match__state-play'
                  type='button'
                  onClick={handlePlayGame}
                >
                  Play
                </button>
              )}
          </div>

          {/* <CardsSelected /> */}

          {activeMatch?.player2 && (
            <h2 className='match__player' style={{ alignSelf: 'flex-end' }}>
              <FontAwesomeIcon icon={faUserNinja} />{' '}
              {activeMatch?.player2.nickname}'s Deck
              <ProgressBar
                basis={activeMatch?.player2?.level * 3000}
                health={activeMatch?.healthPlayer2}
              />
            </h2>
          )}
          <div className='match__deck'>
            {activeMatch?.player2?.uid === uid
              ? activeMatch?.deckPlayer2?.map((card) => (
                  <MatchCard key={card._id} card={card} />
                ))
              : activeMatch?.deckPlayer2?.map((card) => (
                  <MatchCardHidden key={card._id} img={card.image} />
                ))}
          </div>
        </div>
      </Container>
    </MatchStyles>
  );
};
