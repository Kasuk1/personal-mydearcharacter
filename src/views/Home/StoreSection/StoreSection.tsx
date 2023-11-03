import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  ButtonPrimary,
  CardDetail,
  Container,
  Heading2,
  Paragraph,
} from "components";
import { getRandomCharacters, selectGetRandomCharacters } from "features";
import StoreSectionStyles from "./StoreSection.styles";

export const StoreSection = () => {
  const dispatch = useAppDispatch();
  const { randomCharacters } = useAppSelector(selectGetRandomCharacters);

  useEffect(() => {
    dispatch(getRandomCharacters(1));
  }, [dispatch]);

  return (
    <StoreSectionStyles>
      <Container>
        <div className="store-section--left">
          <Heading2>Train and level up the power of your characters</Heading2>
          <Paragraph
            text="See and filter the characters that you could have."
            style={{ marginBottom: "3rem" }}
          />
          <ButtonPrimary path="/characters" text="See characters" />
        </div>
        <div className="store-section--right">
          {randomCharacters.map((character) => (
            <CardDetail key={character.id} {...character} />
          ))}
        </div>
      </Container>
    </StoreSectionStyles>
  );
};
