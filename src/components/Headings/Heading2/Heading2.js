import Heading2Styles from "./Heading2.styles";

export const Heading2 = ({ text, style }) => {
    return (
        <Heading2Styles style={style}>
            {text}
        </Heading2Styles>
    )
}
