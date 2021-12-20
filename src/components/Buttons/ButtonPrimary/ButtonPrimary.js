import React from 'react';
import { Link } from 'react-router-dom';

import ButtonPrimaryStyles from './ButtonPrimary.styles';

export const ButtonPrimary = ({ path, text }) => {
    return (
        <ButtonPrimaryStyles>
            <Link to={path}>
                {text}
            </Link>
        </ButtonPrimaryStyles>
    )
}
