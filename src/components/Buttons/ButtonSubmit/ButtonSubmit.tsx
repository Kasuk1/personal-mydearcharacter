import ButtonSubmitStyles from './ButtonSubmit.styles';

interface ButtonSubmitProps {
  text: string;
}

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ text }) => {
  return (
    <ButtonSubmitStyles>
      <button type='submit'>{text}</button>
    </ButtonSubmitStyles>
  );
};
