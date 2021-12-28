import { ButtonPrimary } from "../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import { CardDetail } from "../../../components/CharacterCard/CardDetail/CardDetail";
import { Heading2 } from "../../../components/Headings/Heading2/Heading2";
import { Paragraph } from "../../../components/Headings/Paragraph/Paragraph";
import { Container } from "../../../components/layout/Container/Container";

import StoreSectionStyles from "./StoreSection.styles";

const cards = [
    {
        id: 16,
        name: 'Charizard',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        anime: 'pokemon',
        types: [
            {
                type: {
                    name: 'fire',
                    url: 'https://pokeapi.co/api/v2/type/10/'
                }
            },
            { type: { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' } }
        ],
        abilities: [
            { ability: { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' } },
            { ability: { name: 'solar-power', url: 'https://pokeapi.co/api/v2/ability/94/' } }
        ],
        height: 17,
        weight: 905,
        price: 100,
        level: 0,
        power: 100
    },
    {
        id: 21,
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        anime: 'pokemon',
        type: [
            { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
            { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' }
        ],
        skill: [
            { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
            { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' }
        ],
        height: 7,
        weight: 69,
        price: 100,
        level: 0,
        power: 100
    }
]

export const StoreSection = () => {
    return (
        <StoreSectionStyles>
            <Container>
                <div className="store-section--left">
                    <Heading2 text="Train and level up the power of your characters" />
                    <Paragraph text='See and filter the characters that you could have.' style={{ marginBottom: '3rem' }} />
                    <ButtonPrimary path="/characters" text="See characters" />
                </div>
                <div className="store-section--right">
                    {cards.map(card => <CardDetail key={card.id} {...card} />)}
                </div>
            </Container>
        </StoreSectionStyles>
    )
}
