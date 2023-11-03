import { ReactNode } from 'react';
import ParagraphStyles from './Paragraph.styles';

interface ParagraphProps {
  text?: string;
  style?: Object;
  children?: ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  text,
  style,
  children,
}) => {
  return (
    <ParagraphStyles style={style}>{text ? text : children}</ParagraphStyles>
  );
};
