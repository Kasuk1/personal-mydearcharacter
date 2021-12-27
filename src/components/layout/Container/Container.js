import ContainerStyles from "./Container.styles"

export const Container = ({ children }) => {
    return (
        <ContainerStyles>
            {children}
        </ContainerStyles>
    )
}
