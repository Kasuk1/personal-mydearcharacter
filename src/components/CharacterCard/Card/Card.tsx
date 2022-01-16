import { useNavigate } from 'react-router-dom';
import CardStyles from './Card.styles';
import { Species } from '../../../interfaces/PokeAPI/Pokemon.interface';

interface CardProps {
    id: number;
    name: string;
    species: Species
    image: string;
}

export const Card: React.FC<CardProps> = ({ id, name, species, image }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/characters/${id}`);
    }

    return (
        <CardStyles onClick={handleCardClick}>
            <div className="card__image">
                <img src={image} alt={name} />
            </div>

            <div className="card__info">
                <span className="card__anime">{species.url.includes('pokemon') ? 'pokémon' : 'other'}</span>
                <h1 className="card__name">{name}</h1>
            </div>

        </CardStyles>
    )
}
