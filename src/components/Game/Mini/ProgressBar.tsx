import styled from "styled-components";

const ProgressBarStyles = styled.div`
  display: flex;
  flex-direction: column;

  .background {
    background-color: ${(props) => props.theme.cardSecondaryColor};
    border-radius: 5rem;
    height: 1.2rem;
    width: 100%;
  }

  .filler {
    height: 100%;
    background: linear-gradient(
      90deg,
      hsla(158, 98%, 22%, 1) 1%,
      hsla(158, 88%, 44%, 1) 100%
    );
    border-radius: 5rem;
  }

  .label {
    color: ${(props) => props.theme.paragraphColor};
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    top: 0;
    width: 100%;
  }
`;

interface ProgressBarProps {
  basis: number;
  health: number;
  showLabel?: boolean;
  width?: string | number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  basis,
  health,
  showLabel = "true",
  width = "auto",
}) => {
  return (
    <ProgressBarStyles>
      <div className="background" style={{ width: width }}>
        <div
          className="filler"
          style={{ width: `${health / (basis / 100)}%` }}
        />
      </div>
      {showLabel && (
        <p className="label">
          {health}/{basis}
        </p>
      )}
    </ProgressBarStyles>
  );
};
