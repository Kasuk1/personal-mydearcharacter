import styled from 'styled-components';

const ProgressBarStyles = styled.div`
  background-color: ${(props) => props.theme.cardSecondaryColor};
  border-radius: 5rem;
  height: 2.5rem;
  width: 100%;
  position: relative;

  .filler {
    height: 100%;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 5rem;
  }

  .label {
    color: ${(props) => props.theme.tertiaryColor};
    font-size: 1.6rem;
    font-weight: bold;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
  }
`;

export const ProgressBar: React.FC<{ basis: number; health: number }> = ({
  basis,
  health,
}) => {
  return (
    <ProgressBarStyles>
      <div
        className='filler'
        style={{ width: `${health / (basis / 100)}%` }}
      ></div>
      <span className='label'>
        {health}/{basis} HP
      </span>
    </ProgressBarStyles>
  );
};
