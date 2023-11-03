import { ButtonPrimary, Container, Heading2, Paragraph } from "components";
import { deoxys } from "assets";
import CharacterSectionStyles from "./CharacterSection.styles";

export const CharacterSection: React.FC = () => {
  return (
    <CharacterSectionStyles>
      <Container>
        <div className="character-section--left">
          <div className="character-section__image">
            <img src={deoxys} alt="" />
          </div>
        </div>
        <div className="character-section--right">
          <Heading2 text="Find your mate and start an adventure" />
          <Paragraph
            text="Try to open a box and get luck. You can get 2 free boxes when you register."
            style={{ marginBottom: "3rem" }}
          />
          <ButtonPrimary path="/boxes" text="Open a box" />
        </div>
      </Container>
    </CharacterSectionStyles>
  );
};
