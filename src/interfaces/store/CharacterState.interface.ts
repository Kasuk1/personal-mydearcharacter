import { Pokemon } from '../index';

export interface CharacterState {
    character: Pokemon | null;
    getCharacterDetailLoading: boolean;
    getCharacterDetailError: boolean;
}