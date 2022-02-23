import styled from 'styled-components';

const ContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(
    12,
    [col-start] minmax(0.5rem, 10.14rem) [col-end]
  );
  column-gap: 2rem;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 87.5em) {
    column-gap: 1.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    column-gap: 2.5rem;
  }
`;

export default ContainerStyles;
