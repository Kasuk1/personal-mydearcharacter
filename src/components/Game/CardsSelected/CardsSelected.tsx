import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardsSelectedStyles from './CardsSelected.styles';
import { useAppSelector } from '../../../app/hooks';
import { selectActiveMatch } from '../../../features/game/game.slice';
import { SocketContext } from 'context/SocketContext';
import { selectUser } from 'features/authentication/authentication.slice';
import { CardWaiting } from '../Mini/CardWaiting';
import { lugia, mewto } from 'assets';

export const CardsSelected = () => {
  const { gameId } = useParams();
  const activeMatch = useAppSelector(selectActiveMatch);
  const { uid } = useAppSelector(selectUser);
  const card1 = activeMatch?.cardsSelected[0];
  const card2 = activeMatch?.cardsSelected[1];
  const socketContext = useContext(SocketContext);

  useEffect(() => {
    if (
      activeMatch?.cardsSelected.length === 2 &&
      activeMatch?.player1.uid === uid
    ) {
      setTimeout(() => {
        socketContext?.socket?.emit(
          'battle-card',
          activeMatch?.cardsSelected,
          gameId
        );
      }, 2000);
    }
  }, [
    socketContext?.socket,
    activeMatch?.cardsSelected,
    gameId,
    activeMatch?.player1.uid,
    uid,
  ]);

  return (
    <CardsSelectedStyles>
      {card1 ? (
        <div className='card-selected'>
          <div className='card-selected__header'>
            <img src={card1.image} alt='' />
            <span className='card-selected__level'>
              Lvl.{' '}
              {activeMatch?.cardsSelected.length === 2 ? card1.level : '???'}
            </span>
          </div>

          <div className='card-selected__info'>
            <div className='card-selected__wrapper'>
              <span>{card1.anime}</span>
              <p>{card1.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <CardWaiting img={mewto} />
      )}

      {activeMatch?.cardsSelected.length === 2 && (
        <span className='card-selected__vs'>vs</span>
      )}

      {card2 ? (
        <div className='card-selected'>
          <div className='card-selected__header'>
            <img src={card2.image} alt='' />
            <span className='card-selected__level'>
              Lvl.{' '}
              {activeMatch?.cardsSelected.length === 2 ? card2.level : '???'}
            </span>
          </div>

          <div className='card-selected__info'>
            <div className='card-selected__wrapper'>
              <span>{card2.anime}</span>
              <p>{card2.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <CardWaiting img={lugia} />
      )}
    </CardsSelectedStyles>
  );
};
