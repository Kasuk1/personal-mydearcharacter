import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  ButtonMatchAction,
  Container,
  Heading1,
  LobbyItem,
  NoItems,
  Paragraph,
} from "components";
import { SocketContext } from "context";
import {
  getMatches,
  selectMatches,
  setActiveMatch,
  selectGetMatchesState,
} from "features";
import LobbyStyles from "./Lobby.styles";

export const Lobby: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const socketContext = useContext(SocketContext);
  const matches = useAppSelector(selectMatches);
  const { loading } = useAppSelector(selectGetMatchesState);

  useEffect(() => {
    socketContext?.socket?.on("created-game", (game) => {
      dispatch(setActiveMatch(game));
      navigate(`/game/${game._id}`);
    });
  }, [socketContext?.socket, navigate, dispatch]);

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  useEffect(() => {
    socketContext?.socket?.on("joined-game", (game) => {
      navigate(`/game/${game._id}`);
    });
  }, [socketContext?.socket, navigate]);

  const handleCreateRoom = () => {
    socketContext?.socket?.emit("create-game");
  };

  return (
    <LobbyStyles>
      <Container>
        <div className="lobby min-height-80">
          <div className="lobby__header">
            <div>
              <Heading1>Lobby</Heading1>
              <Paragraph>
                Find an active room to join and play. Remember that an avaliable
                room have a waiting state.
              </Paragraph>
            </div>

            <ButtonMatchAction
              text="Create room"
              colorMode="submit"
              onButtonAction={handleCreateRoom}
            />
          </div>

          <div className="lobby__rooms">
            {loading ? (
              <div>Loading...</div>
            ) : matches?.length! > 0 ? (
              matches?.map((match) => (
                <LobbyItem key={match._id} match={match} />
              ))
            ) : (
              <NoItems text="No matches available" />
            )}
          </div>
        </div>
      </Container>
    </LobbyStyles>
  );
};
