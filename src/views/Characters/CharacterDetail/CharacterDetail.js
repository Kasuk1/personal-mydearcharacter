import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CardDetail } from "../../../components/CharacterCard/CardDetail/CardDetail";

import { getCharacterDetail, selectCharacter, selectGetCharacterDetailLoading } from "../../../features/character/character.slice";

import CharacterDetailStyles from "./CharacterDetail.styles"

export const CharacterDetail = () => {
    const dispatch = useDispatch();
    const { characterId } = useParams();
    const character = useSelector(selectCharacter);
    const characterLoading = useSelector(selectGetCharacterDetailLoading);

    useEffect(() => {
        dispatch(getCharacterDetail(characterId))
    }, [dispatch, characterId]);

    if (characterLoading) return <h1>Loading...</h1>

    return (
        <CharacterDetailStyles>
            <CardDetail {...character} />
        </CharacterDetailStyles>
    )
}
