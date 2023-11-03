import styled from "styled-components";

const ButtonMatchActionStyles = styled.button<{
  $colorMode: "submit" | "cancel";
}>`
  background-color: ${(props) => props.theme.buttonPrimaryBackgroundColor};
  color: ${(props) => props.theme.buttonPrimaryTextColor};
  border: none;
  border-radius: 5rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  padding: 1.2rem 0;
  min-width: 14rem;
  transition: all 0.6s;

  &:hover {
    background-color: ${(props) =>
      props.$colorMode === "submit" ? "#52c616" : "#cc0000"};
    color: #fff;
  }
`;

interface ButtonMatchActionProps {
  text: string;
  onButtonAction: () => void;
  colorMode: "submit" | "cancel";
}

export const ButtonMatchAction: React.FC<ButtonMatchActionProps> = ({
  text,
  onButtonAction,
  colorMode,
}) => {
  return (
    <ButtonMatchActionStyles
      $colorMode={colorMode}
      type="button"
      onClick={onButtonAction}
    >
      {text}
    </ButtonMatchActionStyles>
  );
};
