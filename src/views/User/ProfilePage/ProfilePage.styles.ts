import styled from 'styled-components';

const ProfilePageStyles = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.paragraphColor};
  padding: 0 3rem;
  padding-top: 10rem;
  padding-bottom: 5rem;
  transition: all 0.2s;

  .profile {
    grid-column: 2 / 12;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    &__headers {
    }

    &__matches {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default ProfilePageStyles;
