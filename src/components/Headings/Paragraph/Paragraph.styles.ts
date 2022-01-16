import styled from "styled-components";

const ParagraphStyles = styled.p`
    color: ${props => props.theme.paragraphColor};
    font-size: 1.2rem;

    @media only screen and (min-width: 87.5em) {
        font-size: 1.8rem;
    }
`;

export default ParagraphStyles;
