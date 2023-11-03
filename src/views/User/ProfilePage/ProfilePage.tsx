import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  Container,
  Heading1,
  Heading2,
  Paragraph,
  NoItems,
  UserMatchCard,
} from "components";
import {
  getMatchesByUserId,
  selectUser,
  selectUserMatches,
  selectGetMatchesByUserIdState,
} from "features";
import ProfilePageStyles from "./ProfilePage.styles";

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
        <div className="profile min-height-80">
          <div className="profile__headers">
            <Heading1>My Profile</Heading1>
            <Paragraph>
              In this section you can see your profile data as well as your game
              history.
            </Paragraph>
          </div>

          <div>
            <Heading2 style={{ marginBottom: "2rem" }}>Match History</Heading2>
            {loading ? (
              <h1>Loading...</h1>
            ) : userMatches?.length! > 0 ? (
              <div className="profile__matches">
                {userMatches?.map((match) => (
                  <UserMatchCard key={match._id} match={match} />
                ))}
              </div>
            ) : (
              <NoItems text="No matches registered" />
            )}
          </div>
        </div>
      </Container>
    </ProfilePageStyles>
  );
};
