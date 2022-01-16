import { CharacterWithDetail } from '../index';

export interface CharactersState {
    next: string | null;
    previous: string | null;
    characters: CharacterWithDetail[];
    getCharactersLoading: boolean;
    getCharactersError: boolean;
}