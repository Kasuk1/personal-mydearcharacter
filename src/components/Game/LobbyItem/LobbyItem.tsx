import { SocketContext } from 'context/SocketContext';
import { Match } from 'interfaces/store/GameState.interface';
import { useContext } from 'react';
import LobbyItemStyles from './LobbyItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

interface MatchItemProps {
  match: Match;
}

export const LobbyItem: React.FC<MatchItemProps> = ({ match }) => {
  const socketContext = useContext(SocketContext);
  const { _id, player1, status } = match;

  const handleJoinMatch = () => {
    if (match.status === 'waiting') {
      socketContext?.socket?.emit('join-game', match);
    }
    return;
  };

  if (match.status === 'finished') {
    return <></>;
  }

  return (
    <LobbyItemStyles
      className={`${match?.status === 'waiting' ? 'waiting' : 'full'}`}
      onClick={handleJoinMatch}
    >
      <div className='lobby-item__wrapper'>
        <span>Leader</span>
        <p>
          <FontAwesomeIcon icon={faUserAstronaut} /> {player1?.nickname}
        </p>
      </div>
      <div className='lobby-item__wrapper'>
        <span className='id'>Match ID</span>
        <p className='id'>{_id}</p>
      </div>
      <div className='lobby-item__wrapper'>
        <span>Status</span>
        <p
          className={`status ${
            match?.status === 'waiting' ? 'waiting' : 'full'
          }`}
        >
          <FontAwesomeIcon icon={faCircle} /> {status}
        </p>
      </div>
      <div className='lobby-item__wrapper'>
        <span>Game</span>
        <p className='lobby-item__type'>1v1</p>
      </div>
    </LobbyItemStyles>
  );
};
