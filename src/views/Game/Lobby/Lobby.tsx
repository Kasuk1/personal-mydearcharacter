import { useAppSelector, useAppDispatch } from 'app/hooks';
import { LobbyItem } from 'components/Game/LobbyItem/LobbyItem';
import { NoItems } from 'components/Game/Mini/NoItems';
import { Heading1 } from 'components/Headings/Heading1/Heading1';
import { Paragraph } from 'components/Headings/Paragraph/Paragraph';
import { Container } from 'components/layout/Container/Container';
import { SocketContext } from 'context/SocketContext';
import {
  getMatches,
  selectMatches,
  setActiveMatch,
} from 'features/game/game.slice';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LobbyStyles from './Lobby.styles';
import { selectGetMatchesState } from '../../../features/game/game.slice';

export const Lobby: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const socketContext = useContext(SocketContext);
  const matches = useAppSelector(selectMatches);
  const { loading } = useAppSelector(selectGetMatchesState);

  useEffect(() => {
    socketContext?.socket?.on('created-game', (game) => {
      dispatch(setActiveMatch(game));
      navigate(`/game/${game._id}`);
    });
  }, [socketContext?.socket, navigate, dispatch]);

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  useEffect(() => {
    socketContext?.socket?.on('joined-game', (game) => {
      navigate(`/game/${game._id}`);
    });
  }, [socketContext?.socket, navigate]);

  const handleCreateRoom = () => {
    socketContext?.socket?.emit('create-game');
  };

  return (
    <LobbyStyles>
      <Container>
        <div className='lobby min-height-80'>
          <div className='lobby__header'>
            <div>
              <Heading1>Lobby</Heading1>
              <Paragraph>
                Find an active room to join and play. Remember that an avaliable
                room have a waiting state.
              </Paragraph>
            </div>
            <button type='button' onClick={handleCreateRoom}>
              Create room
            </button>
          </div>

          <div className='lobby__rooms'>
            {loading ? (
              <div>Loading...</div>
            ) : matches?.length! > 0 ? (
              matches?.map((match) => (
                <LobbyItem key={match._id} match={match} />
              ))
            ) : (
              <NoItems text='No games available' />
            )}
          </div>
        </div>
      </Container>
    </LobbyStyles>
  );
};
