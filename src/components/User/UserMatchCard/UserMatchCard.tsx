import { useAppSelector } from 'app/hooks';
import { MatchCard } from 'components/Game/MatchCard/MatchCard';
import { ProgressBar } from 'components/Game/Mini/ProgressBar';
import { selectUser } from 'features/authentication/authentication.slice';
import { Match } from 'interfaces/store/GameState.interface';
import UserMatchCardStyles from './UserMatchCardStyles';

export const UserMatchCard: React.FC<{ match: Match }> = ({ match }) => {
  const {
    player1,
    player2,
    deckPlayer1,
    deckPlayer2,
    healthPlayer1,
    healthPlayer2,
    status,
    winner,
    turns,
  } = match;
  const { uid } = useAppSelector(selectUser);

  if (status === 'cancelled') return <></>;

  return (
    <UserMatchCardStyles>
      <div className={`user-match-card ${winner === uid ? 'winner' : 'loser'}`}>
        <div className='user-match-card__headers'>
          <div className='user-match-card__info'>
            <p>Classic Match</p>
            <span>1v1</span>
          </div>
          <p className='user-match-card__turns'>
            Match finished with {turns} turns
          </p>
        </div>

        <div className='user-match-card__decks'>
          <div className='user-match-card__deck'>
            <div className='user-match-card__player'>
              <p>{player1.nickname}</p>
              <ProgressBar
                basis={player1.level * 3000}
                health={healthPlayer1}
              />
            </div>
            <div className='user-match-card__deck-list'>
              {deckPlayer1?.map((card) => (
                <MatchCard key={card._id} card={card} />
              ))}
            </div>
          </div>
          <div className='user-match-card__deck'>
            <div className='user-match-card__player'>
              <p>{player2?.nickname}</p>
              <ProgressBar
                basis={player2?.level! * 3000}
                health={healthPlayer2}
              />
            </div>
            <div className='user-match-card__deck-list'>
              {deckPlayer2?.map((card) => (
                <MatchCard key={card._id} card={card} />
              ))}
            </div>
          </div>
        </div>

        {winner === uid ? (
          <span
            className='user-match-card__winner'
            style={{ backgroundColor: '#31ab20' }}
          >
            win
          </span>
        ) : (
          <span
            className='user-match-card__winner'
            style={{ backgroundColor: '#c90e40' }}
          >
            lose
          </span>
        )}
      </div>
    </UserMatchCardStyles>
  );
};
