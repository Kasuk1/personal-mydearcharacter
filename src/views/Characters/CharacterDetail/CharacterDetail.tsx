import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Container, CardDetail, CardDetailLoading } from "components";
import {
  getCharacterDetail,
  selectCharacter,
  selectGetCharacterDetailLoading,
} from "features";
import CharacterDetailStyles from "./CharacterDetail.styles";

export const CharacterDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characterId } = useParams();
  const character = useAppSelector(selectCharacter);
  const characterLoading = useAppSelector(selectGetCharacterDetailLoading);

  useEffect(() => {
    characterId && dispatch(getCharacterDetail(characterId));
    window.scrollTo(0, 0);
  }, [dispatch, characterId]);

  return (
    <CharacterDetailStyles className="min-height-85">
      <Container>
        <div className="character-detail__left">
          {characterLoading ? (
            <CardDetailLoading />
          ) : (
            character && <CardDetail {...character} />
          )}
        </div>
        {/* <div className="character-detail__right"></div> */}
      </Container>
    </CharacterDetailStyles>
  );
};
