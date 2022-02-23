import styled from 'styled-components';

const MatchCardHiddenStyles = styled.div`
  background-color: ${(props) => props.theme.cardPrimaryColor};
  border-radius: 0.9rem;
  padding: 1.5rem 2rem 1rem;
  min-width: 20rem;
  height: 30rem;

    img {
      filter: brightness(0) invert(1); 
      position: relative;
      width: 100%;
    }
  }
`;

export default MatchCardHiddenStyles;
