import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faHandPointer,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { SocketContext } from "context";
import { selectActiveMatch, selectUser } from "features";
import {
  ButtonMatchAction,
  CardsSelected,
  Container,
  MatchCard,
  MatchCardHidden,
  MatchType,
  PlayerInfo,
  PlayerInfoWaiting,
  ProgressBar,
} from "components";
import { acetrainerGen3, acetrainerGen4 } from "assets";

import MatchStyles from "./Match.styles";

export const Match: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { gameId } = useParams();
  const { uid } = useAppSelector(selectUser);
  const activeMatch = useAppSelector(selectActiveMatch);
  const socketContext = useContext(SocketContext);

  const handleCancelGame = () => {
    socketContext?.socket?.emit("cancel-game", gameId);
    navigate("/game");
  };

  const handlePlayGame = () => {
    socketContext?.socket?.emit("play-game", gameId);
  };

  useEffect(() => {
    socketContext?.socket?.on("canceled-game", () => {
      navigate("/game");
    });
  }, [socketContext, navigate]);

  useEffect(() => {
    let finishGameTimer: NodeJS.Timeout;

    if (activeMatch?.healthPlayer1! <= 0 || activeMatch?.healthPlayer2! <= 0) {
      finishGameTimer = setTimeout(() => {
        socketContext?.socket?.emit("finish-game", gameId);
        navigate("/profile");
      }, 4000);
    }
    return () => clearTimeout(finishGameTimer);
  }, [socketContext?.socket, navigate, activeMatch, gameId, dispatch]);

  /*  useEffect(() => {
    return () => {
      console.log('clean');
      socketContext?.socket?.emit('cancel-game', gameId);
    };
  }, [socketContext?.socket, gameId]); */

  return (
    <MatchStyles>
      <Container>
        <div className="match min-height-70">
          <div className="match__headers">
            <div className="match__headers--info">
              <h1>Classic Match</h1>
              <MatchType text="1v1" />
            </div>

            {activeMatch?.player1?.uid === uid && (
              <ButtonMatchAction
                text="Leave Room"
                colorMode="cancel"
                onButtonAction={handleCancelGame}
              />
            )}
          </div>
          <div className="match__info player1">
            {activeMatch?.status === "playing" && activeMatch?.player1 && (
              <>
                <div className="match__player">
                  <img src={acetrainerGen4} alt="" />
                  <div>
                    <h2>{activeMatch?.player1.nickname}</h2>
                    <ProgressBar
                      basis={activeMatch?.player1?.level * 3000}
                      health={activeMatch?.healthPlayer1}
                    />
                  </div>
                  {activeMatch?.status === "playing" &&
                    activeMatch?.turns % 2 !== 0 &&
                    activeMatch?.cardsSelected.length !== 2 &&
                    activeMatch?.healthPlayer1 > 0 &&
                    activeMatch?.healthPlayer2 > 0 && (
                      <div className="match__pointer--player1">
                        <FontAwesomeIcon icon={faHandPointer} />
                      </div>
                    )}
                </div>
                <div className="match__deck">
                  {activeMatch?.player1?.uid === uid
                    ? activeMatch?.deckPlayer1?.map((card) => (
                        <MatchCard key={card._id} card={card} />
                      ))
                    : activeMatch?.deckPlayer1?.map((card) => (
                        <MatchCardHidden key={card._id} img={card.image} />
                      ))}
                </div>
              </>
            )}
          </div>

          <div className="match__state">
            {/* WAITING FOR SECOND PLAYER */}
            {(activeMatch?.status === "waiting" ||
              activeMatch?.status === "full") && (
              <div className="match__state--waiting-box">
                {activeMatch?.player1 ? (
                  <PlayerInfo
                    imgSrc={acetrainerGen4}
                    text={activeMatch.player1.nickname}
                  />
                ) : (
                  <PlayerInfoWaiting />
                )}

                {activeMatch?.status === "full" ? (
                  activeMatch?.player1?.uid === uid && (
                    <button
                      className="match__state-play"
                      type="button"
                      onClick={handlePlayGame}
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </button>
                  )
                ) : (
                  <span className="match__state--waiting-vs">vs</span>
                )}

                {activeMatch.player2 ? (
                  <PlayerInfo
                    imgSrc={acetrainerGen3}
                    text={activeMatch.player2.nickname}
                  />
                ) : (
                  <PlayerInfoWaiting />
                )}
              </div>
            )}

            {/* WINNER PLAYER */}
            {activeMatch?.status === "playing" && (
              <>
                {activeMatch?.healthPlayer1! <= 0 && (
                  <PlayerInfo
                    text={`${activeMatch?.player2?.nickname} WINS!`}
                    imgSrc={acetrainerGen4}
                  />
                )}
                {activeMatch?.healthPlayer2! <= 0 && (
                  <PlayerInfo
                    text={`${activeMatch?.player1?.nickname} WINS!`}
                    imgSrc={acetrainerGen4}
                  />
                )}
              </>
            )}

            {/* PLAYERS CARD SELECTED */}
            {activeMatch?.status === "playing" &&
              activeMatch?.healthPlayer1! > 0 &&
              activeMatch?.healthPlayer2! > 0 && <CardsSelected />}
          </div>

          <div className="match__info player2">
            {activeMatch?.status === "playing" && activeMatch?.player2 && (
              <>
                <div className="match__player">
                  <img src={acetrainerGen3} alt="" />
                  <div>
                    <h2>{activeMatch?.player2.nickname}</h2>
                    <ProgressBar
                      basis={activeMatch?.player2?.level * 3000}
                      health={activeMatch?.healthPlayer2}
                    />
                  </div>
                  {activeMatch?.status === "playing" &&
                    activeMatch?.turns % 2 === 0 &&
                    activeMatch?.cardsSelected.length !== 2 &&
                    activeMatch?.healthPlayer2 > 0 &&
                    activeMatch?.healthPlayer1 > 0 && (
                      <div className="match__pointer--player2">
                        <FontAwesomeIcon icon={faHandPointDown} />
                      </div>
                    )}
                </div>
                <div className="match__deck">
                  {activeMatch?.player2?.uid === uid
                    ? activeMatch?.deckPlayer2?.map((card) => (
                        <MatchCard key={card._id} card={card} />
                      ))
                    : activeMatch?.deckPlayer2?.map((card) => (
                        <MatchCardHidden key={card._id} img={card.image} />
                      ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </MatchStyles>
  );
};
