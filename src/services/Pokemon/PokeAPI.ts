import { Characters, Pokemon, Result, GetCharacters } from "../../interfaces";

const URL: string = 'https://pokeapi.co/api/v2';

export const PokeAPI = {
    async getCharacters(nextPrev: string): Promise<GetCharacters> {
        const response = nextPrev ? await fetch(nextPrev) : await fetch(`${URL}/pokemon`);
        const { next, previous, results } = (await response.json()) as Characters;

        const charactersWithDetail = await Promise.all(results.map(async (character: Result) => {
            const characterId = character.url.split('https://pokeapi.co/api/v2/pokemon/')[1];
            const { id, name, sprites, species } = await PokeAPI.getCharacterDetail(characterId);
           
            return { id, name, image: sprites.other!['official-artwork'].front_default , species };
        }));

        return {
            next,
            previous,
            charactersWithDetail
        };
    },

    async getRandomCharacters(): Promise<Pokemon[]> {
        const randomNumber1 = (Math.floor(Math.random() * 500 ) + 1).toString();
        const randomNumber2 = (Math.floor(Math.random() * 500 ) + 1).toString();
        const pokemon1 = await PokeAPI.getCharacterDetail(randomNumber1);
        const pokemon2 = await PokeAPI.getCharacterDetail(randomNumber2);
        return [
            {...pokemon1},
            {...pokemon2}
        ];
    },

    async getCharacterDetail(characterId: string): Promise<Pokemon> {
        const response = await fetch(`${URL}/pokemon/${characterId}`);
        const json = (await response.json()) as Pokemon;
        return json;
    }
}