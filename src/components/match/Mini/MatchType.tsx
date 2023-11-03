import styled from "styled-components";

const MatchTypeStyles = styled.div`
  background-color: ${(props) => props.theme.cardSingleTextColor};
  border-radius: 5rem;
  padding: 0.1rem 2.5rem;
  align-self: flex-start;

  display: flex;
  justify-content: center;
  align-items: center;

  .match-type {
    &__text {
      color: ${(props) => props.theme.cardPrimaryColor};
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
`;

interface MatchTypeProps {
  text: string;
}

export const MatchType: React.FC<MatchTypeProps> = ({ text }) => {
  return (
    <MatchTypeStyles>
      <p className="match-type__text">{text}</p>
    </MatchTypeStyles>
  );
};
