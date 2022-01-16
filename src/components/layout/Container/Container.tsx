import ContainerStyles from "./Container.styles"

export const Container: React.FC = ({ children }) => {
    return (
        <ContainerStyles>
            {children}
        </ContainerStyles>
    )
}
