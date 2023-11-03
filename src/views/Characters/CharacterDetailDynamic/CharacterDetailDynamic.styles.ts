import styled from "styled-components";

const CardDetailDynamicStyles = styled.section`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 200;

  & article {
    transform: scale(0.7);

    @media only screen and (min-width: 37.5em) {
      transform: scale(0.8);
    }
    @media only screen and (min-width: 87.5em) {
      transform: scale(1);
    }
  }
`;

export default CardDetailDynamicStyles;
