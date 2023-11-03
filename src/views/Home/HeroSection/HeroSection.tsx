import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonPrimary, Container } from "components";
import { bannerMewto } from "assets";
import HeroSectionStyles from "./HeroSection.styles";
import { useAppSelector } from "app/hooks";
import { selectUser } from "features";

export const HeroSection: React.FC = () => {
  const { isLogged } = useAppSelector(selectUser);

  return (
    <HeroSectionStyles>
      <Container>
        <div className="hero-section--left">
          <h1 className="hero-section__title">
            Collect your favourite characters
          </h1>
          <div className="hero-section__actions">
            <ButtonPrimary
              path={isLogged ? "/game/lobby" : "/auth/register"}
              text={isLogged ? "Play now" : "Register"}
            />
            <Link
              className="hero-section__span"
              to={isLogged ? "/profile" : "/auth/login"}
            >
              {isLogged ? "See your profile" : "Do you have an account?"}{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        <div className="hero-section--right">
          <div className="hero-section__image">
            <img src={bannerMewto} alt="" />
          </div>
        </div>
      </Container>
    </HeroSectionStyles>
  );
};
