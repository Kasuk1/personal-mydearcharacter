import { Species } from '../PokeAPI/Pokemon.interface';

export interface GetCharacters {
    next:     string | null;
    previous: string | null;
    charactersWithDetail: CharacterWithDetail[];
}

export interface CharacterWithDetail {
    id: number;
    name: string;
    image: string; 
    species: Species;
}