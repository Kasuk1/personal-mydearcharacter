import styled from "styled-components";

const Heading2Styles = styled.h2`
    color: ${props => props.theme.paragraphColor};
    font-size: 7.5vw;
    line-height: 7.5vw;

    @media only screen and (min-width: 37.5em) {
        font-size: 4.8rem;
        line-height: 5.2rem;
    }
`;

export default Heading2Styles;
