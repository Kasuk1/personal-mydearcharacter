import styled from "styled-components";

const PlayerInfoStyles = styled.div`
  width: 18rem;

  .player-info {
    &__image {
      width: 100%;
    }

    &__nickname {
      font-size: 3rem;
    }
  }
`;

interface PlayerInfoProps {
  imgSrc: string;
  imgAlt?: string;
  text: string;
}

export const PlayerInfo: React.FC<PlayerInfoProps> = ({
  imgSrc,
  imgAlt = "",
  text,
}) => {
  return (
    <PlayerInfoStyles>
      <img className="player-info__image" src={imgSrc} alt={imgAlt} />
      <p className="player-info__nickname">{text}</p>
    </PlayerInfoStyles>
  );
};
