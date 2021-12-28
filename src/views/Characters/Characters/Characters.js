import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import { getCharacters, selectCharacters, selectGetCharactersLoading, selectNextCharacters } from "../../../features/characters/characters.slice";

import { Card } from "../../../components/CharacterCard/Card/Card";
import { Container } from "../../../components/layout/Container/Container";
import { Heading1 } from "../../../components/Headings/Heading1/Heading1";
import { Paragraph } from "../../../components/Headings/Paragraph/Paragraph";
import { CharactersLoading } from "./CharactersLoading";

import CharactersStyles from "./Characters.styles";

export const Characters = () => {
    const dispatch = useDispatch();
    const characters = useSelector(selectCharacters);
    const next = useSelector(selectNextCharacters);
    const charactersLoading = useSelector(selectGetCharactersLoading);

    useEffect(() => {
        return characters.length === 0 ? dispatch(getCharacters()) : null;
    }, [dispatch, characters]);

    const handleLoadMore = () => {
        dispatch(getCharacters(next));
    }

    //TODO: Pending navbar scrollbar and stylize CharacterDetail

    return (
        <CharactersStyles>
            <Container>
                <div className='characters__cards'>
                    <div className='characters__titles'>
                        <Heading1>Characters</Heading1>
                        <Paragraph text='Explore all the characters available in the app.' />
                    </div>

                    {characters.map(character => <Card key={character.id} {...character} />)}
                    {charactersLoading && <CharactersLoading />}

                    <div className='characters__buttons'>
                        <button className={next ? '' : 'disabled'} onClick={next ? handleLoadMore : null}>
                            Load more <FontAwesomeIcon icon={faChevronCircleDown} />
                        </button>
                    </div>
                </div>

            </Container>
        </CharactersStyles>
    )
}
