import React from 'react';
import { Link } from 'react-router-dom';

import ButtonPrimaryStyles from './ButtonPrimary.styles';

interface ButtonPrimaryProps {
    path: string;
    text: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps>= ({ path, text }) => {
    return (
        <ButtonPrimaryStyles>
            <Link to={path}>
                {text}
            </Link>
        </ButtonPrimaryStyles>
    )
}
