import { useEffect, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Card, Container, Heading1, Paragraph } from "components";
import { CharacterDetailDynamic } from "../CharacterDetailDynamic/CharacterDetailDynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import {
  getCharacters,
  selectCharacters,
  selectGetCharactersLoading,
  selectNextCharacters,
} from "../../../features/characters/characters.slice";
import { CharactersLoading } from "./CharactersLoading";
import CharactersStyles from "./Characters.styles";

export const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokeIdSelected, setPokeIdSelected] = useState(
    searchParams.get("pokeId")
  );
  const characters = useAppSelector(selectCharacters);
  const next = useAppSelector(selectNextCharacters);
  const charactersLoading = useAppSelector(selectGetCharactersLoading);

  const handleCardClick = (id: number) => {
    const params: URLSearchParamsInit = { pokeId: String(id) };
    setSearchParams(params);
  };

  const cleamCharacterId = () => setSearchParams({});

  const handleLoadMore = () => {
    next && dispatch(getCharacters(next));
  };

  useEffect(() => {
    setPokeIdSelected(searchParams.get("pokeId"));
  }, [searchParams]);

  useEffect(() => {
    if (characters.length === 0) dispatch(getCharacters(""));
  }, [characters, dispatch]);

  return (
    <>
      <CharactersStyles>
        <Container>
          <div className="characters__cards">
            <div className="characters__titles">
              <Heading1>Characters</Heading1>
              <Paragraph>
                Explore all the characters available in the app.
              </Paragraph>
            </div>

            {characters.map((character) => (
              <Card
                key={character.id}
                onClick={handleCardClick}
                {...character}
              />
            ))}
            {charactersLoading && <CharactersLoading />}

            <div className="characters__buttons">
              <button
                className={next ? "" : "disabled"}
                onClick={handleLoadMore}
              >
                Load more <FontAwesomeIcon icon={faChevronCircleDown} />
              </button>
            </div>
          </div>
        </Container>
      </CharactersStyles>
      {pokeIdSelected && (
        <CharacterDetailDynamic
          pokeIdSelected={pokeIdSelected}
          handleClick={cleamCharacterId}
        />
      )}
    </>
  );
};
