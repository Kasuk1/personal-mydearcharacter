import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import { getCharacters, selectCharacters, selectGetCharactersLoading, selectNextCharacters } from "../../../features/characters/characters.slice";

import { Card } from "../../../components/CharacterCard/Card/Card";
import { Container } from "../../../components/layout/Container/Container";
import { Heading1 } from "../../../components/Headings/Heading1/Heading1";
import { Paragraph } from "../../../components/Headings/Paragraph/Paragraph";
import { CharactersLoading } from "./CharactersLoading";

import CharactersStyles from "./Characters.styles";

export const Characters: React.FC = () => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector(selectCharacters);
    const next = useAppSelector(selectNextCharacters);
    const charactersLoading = useAppSelector(selectGetCharactersLoading);

    useEffect(() => {
        characters.length === 0 && dispatch(getCharacters(''));
    }, [dispatch, characters]);

    const handleLoadMore = () => {
        next && dispatch(getCharacters(next));
    }

    return (
        <CharactersStyles>
            <Container>
                <div className='characters__cards'>
                    <div className='characters__titles'>
                        <Heading1>Characters</Heading1>
                        <Paragraph>Explore all the characters available in the app.</Paragraph>
                    </div>

                    {characters.map(character => <Card key={character.id} {...character} />)}
                    {charactersLoading && <CharactersLoading />}

                    <div className='characters__buttons'>
                        <button className={next ? '' : 'disabled'} onClick={handleLoadMore}>
                            Load more <FontAwesomeIcon icon={faChevronCircleDown} />
                        </button>
                    </div>
                </div>

            </Container>
        </CharactersStyles>
    )
}
