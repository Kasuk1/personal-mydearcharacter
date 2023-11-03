import { gen1rb } from "assets";
import styled from "styled-components";

const PlayerInfoWaitingStyles = styled.div`
  width: 18rem;

  .player-info-waiting {
    &__image {
      width: 100%;
      filter: brightness(100)
        drop-shadow(10px 10px 10px ${(prop) => prop.theme.secondaryColor})
        invert(1);
      animation: opacityLoadingFull 1s ease-in alternate infinite;
    }

    &__nickname {
      font-size: 2rem;
    }
  }
`;

interface PlayerInfoWaitingProps {}

export const PlayerInfoWaiting: React.FC<PlayerInfoWaitingProps> = () => {
  return (
    <PlayerInfoWaitingStyles>
      <img className="player-info-waiting__image" src={gen1rb} alt="" />

      <p className="player-info-waiting__nickname">???</p>
    </PlayerInfoWaitingStyles>
  );
};
