import { useAppSelector } from "app/hooks";
import { MatchCard, MatchType, ProgressBar } from "components";
import { selectUser } from "features";
import { Match } from "interfaces/store/GameState.interface";
import UserMatchCardStyles from "./UserMatchCard.styles";

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

  if (status === "cancelled") return <></>;

  return (
    <UserMatchCardStyles>
      <div className={`user-match-card ${winner === uid ? "winner" : "loser"}`}>
        <div className="user-match-card__headers">
          <div className="user-match-card__info">
            <p className="user-match-card__info--title">Classic Match</p>
            <MatchType text="1v1" />
          </div>
          <p className="user-match-card__turns">{turns} turns</p>
          {winner === uid ? (
            <span
              className="user-match-card__winner"
              style={{ color: "#31ab20" }}
            >
              Win
            </span>
          ) : (
            <span
              className="user-match-card__winner"
              style={{ color: "#c90e40" }}
            >
              Lose
            </span>
          )}
        </div>

        <div className="user-match-card__decks">
          <div className="user-match-card__deck">
            <div className="user-match-card__player">
              <p>{player1.nickname}</p>
              <ProgressBar
                basis={player1.level * 3000}
                health={healthPlayer1}
                width="8rem"
              />
            </div>
            <div className="user-match-card__deck-list">
              {deckPlayer1?.map((card) => (
                <MatchCard key={card._id} card={card} />
              ))}
            </div>
          </div>
          <div className="user-match-card__deck">
            <div className="user-match-card__deck-player">
              <p>{player2?.nickname}</p>
              <ProgressBar
                basis={player2?.level! * 3000}
                health={healthPlayer2}
                width="8rem"
              />
            </div>
            <div className="user-match-card__deck-list">
              {deckPlayer2?.map((card) => (
                <MatchCard key={card._id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </UserMatchCardStyles>
  );
};
