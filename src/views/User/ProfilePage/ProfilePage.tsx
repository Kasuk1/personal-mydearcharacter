import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Heading1 } from 'components/Headings/Heading1/Heading1';
import { Paragraph } from 'components/Headings/Paragraph/Paragraph';
import { Container } from 'components/layout/Container/Container';
import { selectUser } from 'features/authentication/authentication.slice';
import {
  getMatchesByUserId,
  selectUserMatches,
} from 'features/game/game.slice';
import { useEffect } from 'react';
import ProfilePageStyles from './ProfilePage.styles';
import { selectGetMatchesByUserIdState } from '../../../features/game/game.slice';
import { UserMatchCard } from 'components/User/UserMatchCard/UserMatchCard';
import { Heading2 } from 'components/Headings/Heading2/Heading2';

export const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { uid } = useAppSelector(selectUser);
  const { loading } = useAppSelector(selectGetMatchesByUserIdState);
  const userMatches = useAppSelector(selectUserMatches);

  useEffect(() => {
    dispatch(getMatchesByUserId(uid!));
  }, [dispatch, uid]);

  return (
    <ProfilePageStyles>
      <Container>
        <div className='profile min-height-80'>
          <div className='profile__headers'>
            <Heading1>My Profile</Heading1>
            <Paragraph>
              In this section you can see your matches and its state during your
              journey. Good luck!.
            </Paragraph>
          </div>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            userMatches && (
              <div>
                <Heading2 style={{ marginBottom: '2rem' }}>
                  Game History
                </Heading2>
                <div className='profile__matches'>
                  {userMatches.map((match) => (
                    <UserMatchCard key={match._id} match={match} />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </ProfilePageStyles>
  );
};
