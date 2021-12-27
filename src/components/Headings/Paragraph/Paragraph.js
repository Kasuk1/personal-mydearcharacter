import ParagraphStyles from "./Paragraph.styles";

export const Paragraph = ({ text, style, children }) => {
    return (
        <ParagraphStyles style={style}>
            {text ? text : children}
        </ParagraphStyles>
    )
}
