import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  getCharacterDetail,
  selectCharacter,
  selectGetCharacterDetailError,
  selectGetCharacterDetailLoading,
} from "features";
import { CardDetail, CardDetailLoading } from "components";
import CharacterDetailDynamicStyles from "./CharacterDetailDynamic.styles";

interface CharacterDetailDynamicProps {
  pokeIdSelected: string;
  handleClick: () => void;
}

export const CharacterDetailDynamic: FC<CharacterDetailDynamicProps> = ({
  pokeIdSelected,
  handleClick,
}) => {
  const dispatch = useAppDispatch();
  const character = useAppSelector(selectCharacter);
  const characterLoading = useAppSelector(selectGetCharacterDetailLoading);
  const characterError = useAppSelector(selectGetCharacterDetailError);

  useEffect(() => {
    pokeIdSelected && dispatch(getCharacterDetail(pokeIdSelected));
  }, [dispatch, pokeIdSelected]);

  useEffect(() => {
    characterError && handleClick();
  }, [characterError, handleClick, dispatch]);

  return (
    <CharacterDetailDynamicStyles onClick={handleClick}>
      {characterLoading ? (
        <CardDetailLoading />
      ) : (
        character && <CardDetail {...character} />
      )}
    </CharacterDetailDynamicStyles>
  );
};
