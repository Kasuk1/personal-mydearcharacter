import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CardDetail } from "../../../components/CharacterCard/CardDetail/CardDetail";
import { Container } from "../../../components/layout/Container/Container";
import { CardDetailLoading } from "../../../components/CharacterCard/CardDetail/CardDetailLoading";

import { getCharacterDetail, selectCharacter, selectGetCharacterDetailLoading } from "../../../features/character/character.slice";

import CharacterDetailStyles from "./CharacterDetail.styles"

export const CharacterDetail = () => {
    const dispatch = useDispatch();
    const { characterId } = useParams();
    const character = useSelector(selectCharacter);
    const characterLoading = useSelector(selectGetCharacterDetailLoading);

    useEffect(() => {
        dispatch(getCharacterDetail(characterId));
        window.scrollTo(0, 0);
    }, [dispatch, characterId]);

    return (
        <CharacterDetailStyles>
            <Container>
                <div className='character-detail__left'>
                    {characterLoading ? <CardDetailLoading /> : (
                        <CardDetail {...character} />
                    )}
                </div>
                <div className='character-detail__right'>
                </div>
            </Container>
        </CharacterDetailStyles>
    )
}
