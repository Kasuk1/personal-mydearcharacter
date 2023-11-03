import { useContext } from "react";
import { SocketContext } from "context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Match } from "interfaces";
import { MatchType } from "../Mini/MatchType";
import LobbyItemStyles from "./LobbyItem.styles";

interface MatchItemProps {
  match: Match;
}

export const LobbyItem: React.FC<MatchItemProps> = ({ match }) => {
  const socketContext = useContext(SocketContext);
  const { _id, player1, status } = match;

  const handleJoinMatch = () => {
    if (match.status === "waiting") {
      socketContext?.socket?.emit("join-game", match);
    }
    return;
  };

  if (match.status === "finished") {
    return <></>;
  }

  return (
    <LobbyItemStyles
      className={`${match?.status === "waiting" ? "waiting" : "full"}`}
      onClick={handleJoinMatch}
    >
      <div className="lobby-item__wrapper">
        <span className="lobby-item__wrapper--title">Leader</span>
        <p className="lobby-item__wrapper--description">
          <FontAwesomeIcon icon={faUserAstronaut} /> {player1?.nickname}
        </p>
      </div>
      <div className="lobby-item__wrapper">
        <span className="lobby-item__wrapper--title id">Match ID</span>
        <p className="lobby-item__wrapper--description id">{_id}</p>
      </div>
      <div className="lobby-item__wrapper">
        <span className="lobby-item__wrapper--title">Status</span>
        <p
          className={`lobby-item__wrapper--description status ${
            match?.status === "waiting" ? "waiting" : "full"
          }`}
        >
          <FontAwesomeIcon icon={faCircle} /> {status}
        </p>
      </div>
      <div className="lobby-item__wrapper">
        <span className="lobby-item__wrapper--title">Game</span>
        <MatchType text="1v1" />
      </div>
    </LobbyItemStyles>
  );
};
