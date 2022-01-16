import Heading1Styles from './Heading1.styles';

interface Heading1Props {
    text?: string;
    style?: Object;
}

export const Heading1: React.FC<Heading1Props> = ({ text, style, children }) => {
    return (
        <Heading1Styles style={style}>
            {text ? text : children}
        </Heading1Styles>
    )
}
