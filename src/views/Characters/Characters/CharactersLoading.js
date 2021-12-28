import { CardLoading } from "../../../components/CharacterCard/Card/CardLoading";

export const CharactersLoading = () => {
    return (
        <>
            {[1, 2, 3, 4, 5, 6].map(num => <CardLoading key={num} />)}
        </>
    )
}
