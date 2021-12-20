import React from 'react';
import { Link } from 'react-router-dom';

import MewtoImage from "../../../assets/images/banner-mewto.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import HeroSectionStyles from './HeroSection.styles';
import { ButtonPrimary } from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';

export const HeroSection = () => {
    return (
        <HeroSectionStyles>
            <div className="hero-section--left">
                <h1 className="hero-section__title">Collect and share your favorite characters</h1>
                <div className="hero-section__actions">
                    <ButtonPrimary path="register" text="Register" />
                    <Link className="hero-section__span" to="login">or login if you have an account <FontAwesomeIcon icon={faArrowRight} /> </Link>
                </div>
            </div>
            <div className="hero-section--right">
                <div className="hero-section__image">
                    <img src={MewtoImage} alt="" />
                </div>
            </div>
        </HeroSectionStyles>
    )
}