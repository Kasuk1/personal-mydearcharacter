import Heading1Styles from "./Heading1.styles";

export const Heading1 = ({ text, style, children }) => {
    return (
        <Heading1Styles style={style}>
            {text ? text : children}
        </Heading1Styles>
    )
}
