import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { SocketContext } from "context";
import {
  selectActiveMatch,
  selectUser,
  selectCardMatchSelected,
  setCardMatchSelected,
} from "features";
import { Card } from "interfaces";
import MatchCardStyles from "./MatchCard.styles";

interface MatchCardProps {
  card: Card;
}

export const MatchCard: React.FC<MatchCardProps> = ({ card }) => {
  const dispatch = useAppDispatch();
  const { gameId } = useParams();
  const { anime, name, image, level, health, power } = card;
  const activeMatch = useAppSelector(selectActiveMatch);
  const { uid } = useAppSelector(selectUser);
  const cardMatchSelected = useAppSelector(selectCardMatchSelected);
  const socketContext = useContext(SocketContext);

  const handleMatchCardClick = () => {
    if (
      activeMatch?.status === "playing" &&
      activeMatch?.player1.uid === uid &&
      activeMatch?.turns % 2 !== 0 &&
      activeMatch?.cardsSelected.length !== 2 &&
      !cardMatchSelected
    ) {
      dispatch(setCardMatchSelected(true));
      socketContext?.socket?.emit("select-card", card, gameId);
    }
    if (
      activeMatch?.status === "playing" &&
      activeMatch?.player2?.uid === uid &&
      activeMatch?.turns % 2 === 0 &&
      activeMatch?.cardsSelected.length !== 2 &&
      !cardMatchSelected
    ) {
      dispatch(setCardMatchSelected(true));
      socketContext?.socket?.emit("select-card", card, gameId);
    }
  };

  return (
    <MatchCardStyles onClick={handleMatchCardClick}>
      <div className="match-card__header">
        <img src={image} alt="" />
        <span className="match-card__level">{level}</span>
      </div>

      <div className="match-card__info">
        <div className="match-card__wrapper">
          <span>{anime}</span>
          <p>{name}</p>
        </div>
        <div className="match-card__statistics">
          <div className="match-card__wrapper">
            <span>Health</span>
            <p>{health}</p>
          </div>
          <div className="match-card__wrapper">
            <span>Power</span>
            <p>{power}</p>
          </div>
        </div>
      </div>
    </MatchCardStyles>
  );
};
