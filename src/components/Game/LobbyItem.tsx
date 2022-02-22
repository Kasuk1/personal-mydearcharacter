import { SocketContext } from 'context/SocketContext';
import { Match } from 'interfaces/store/GameState.interface';
import { useContext } from 'react';

interface MatchItemProps {
  match: Match;
}

export const LobbyItem: React.FC<MatchItemProps> = ({ match }) => {
  const socketContext = useContext(SocketContext);

  const handleJoinMatch = () => {
    if (match.status === 'waiting') {
      socketContext?.socket?.emit('join-game', match);
    }
  };

  return (
    <div
      style={{
        cursor: `${match.status === 'waiting' ? 'pointer' : 'default'}`,
        backgroundColor: `${match.status === 'waiting' ? 'green' : 'red'}`,
      }}
      onClick={handleJoinMatch}
    >
      <p>Match ID: {match._id}</p>
      <p>Status: {match.status}</p>
    </div>
  );
};
