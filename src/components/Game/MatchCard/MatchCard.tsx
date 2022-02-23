import { useAppSelector } from 'app/hooks';
import { useParams } from 'react-router-dom';
import { SocketContext } from 'context/SocketContext';
import { selectActiveMatch } from 'features/game/game.slice';
import { Card } from 'interfaces/store/GameState.interface';
import { useContext, useState } from 'react';
import MatchCardStyles from './MatchCard.styles';
import { selectUser } from '../../../features/authentication/authentication.slice';
interface MatchCardProps {
  card: Card;
}

export const MatchCard: React.FC<MatchCardProps> = ({ card }) => {
  const { gameId } = useParams();
  const { anime, name, image, level, health, power } = card;
  const activeMatch = useAppSelector(selectActiveMatch);
  const { uid } = useAppSelector(selectUser);
  const socketContext = useContext(SocketContext);

  const handleMatchCardClick = () => {
    if (
      activeMatch?.status === 'playing' &&
      activeMatch?.player1.uid === uid &&
      activeMatch?.turns % 2 !== 0 &&
      activeMatch?.cardsSelected.length !== 2
    ) {
      socketContext?.socket?.emit('select-card', card, gameId);
    }
    if (
      activeMatch?.status === 'playing' &&
      activeMatch?.player2?.uid === uid &&
      activeMatch?.turns % 2 === 0 &&
      activeMatch?.cardsSelected.length !== 2
    ) {
      socketContext?.socket?.emit('select-card', card, gameId);
    }
  };

  return (
    <MatchCardStyles onClick={handleMatchCardClick}>
      <div className='match-card__header'>
        <img src={image} alt='' />
        <span className='match-card__level'>Lvl. {level}</span>
      </div>

      <div className='match-card__info'>
        <div className='match-card__wrapper'>
          <span>{anime}</span>
          <p>{name}</p>
        </div>
        <div className='match-card__statistics'>
          <div className='match-card__wrapper'>
            <span>Health</span>
            <p>{health}</p>
          </div>
          <div className='match-card__wrapper'>
            <span>Power</span>
            <p>{power}</p>
          </div>
        </div>
      </div>
    </MatchCardStyles>
  );
};