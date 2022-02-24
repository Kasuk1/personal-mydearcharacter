import styled from 'styled-components';

const CardWaitingStyles = styled.div`
  width: 30rem;
  position: relative;
  animation: opacityLoadingFull 1.5s infinite alternate;

  & img {
    filter: brightness(100) invert(1);
    width: 100%;
  }

  & span {
    color: ${(props) => props.theme.primaryColor};
    font-size: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const CardWaiting: React.FC<{ img: string }> = ({ img }) => {
  return (
    <CardWaitingStyles>
      <img src={img} alt='' />
    </CardWaitingStyles>
  );
};
