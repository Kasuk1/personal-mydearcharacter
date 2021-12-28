const URL = 'https://pokeapi.co/api/v2';

export const PokeAPI = {
    async getCharacters(nextPrev) {
        const response = nextPrev ? await fetch(nextPrev) : await fetch(`${URL}/pokemon`);
        const { next, previous, results } = await response.json();

        const charactersWithDetail = await Promise.all(results.map(async (character) => {
            const characterUrl = character.url.split('https://pokeapi.co/api/v2/pokemon/')[1];
            const { id, name, sprites, species } = await this.getCharacterDetail(characterUrl);
            return { id, name, image: sprites.other['official-artwork'].front_default, species };
        }));

        return {
            next,
            previous,
            charactersWithDetail
        };
    },

    async getCharacterDetail(characterId) {
        const response = await fetch(`${URL}/pokemon/${characterId}`);
        const json = await response.json();
        return json;
    }
}