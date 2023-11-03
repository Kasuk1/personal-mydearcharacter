import { ReactNode } from 'react';
import Heading2Styles from './Heading2.styles';

interface Heading2Props {
  text?: string;
  style?: Object;
  children?: ReactNode;
}

export const Heading2: React.FC<Heading2Props> = ({
  text,
  style,
  children,
}) => {
  return (
    <Heading2Styles style={style}>{text ? text : children}</Heading2Styles>
  );
};
