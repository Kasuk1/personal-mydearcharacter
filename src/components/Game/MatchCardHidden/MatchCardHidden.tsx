import React from 'react';
import MatchCardHiddenStyles from './MatchCardHidden.styles';

interface MatchCardHiddenProps {
  img: string;
}

export const MatchCardHidden: React.FC<MatchCardHiddenProps> = ({ img }) => {
  return (
    <MatchCardHiddenStyles>
      <img src={img} alt='' />
    </MatchCardHiddenStyles>
  );
};
