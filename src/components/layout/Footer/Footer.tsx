import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from '../Container/Container';
import { Paragraph } from '../../Headings/Paragraph/Paragraph';

import FooterStyles from './Footer.styles'

library.add(fab);

export const Footer: React.FC = () => {
    return (
        <FooterStyles>
            <Container>
                <div className='footer__left'>
                    <span className="footer__logo">MDC</span>
                    <Paragraph text='Copyright © by Igor' />
                </div>

                <div className='footer__right'>
                    <ul className="footer__list">
                        <li className="footer__item"><Link to="/characters">Characters</Link></li>
                        <li className="footer__item"><Link to="/boxes">Boxes</Link></li>
                        <li className="footer__item"><Link to="/coins">Coins</Link></li>
                        <li className="footer__item">
                            Follow me:
                            <ul className="footer__media">
                                <li className="footer__media--item"><a href='https://github.com/Kasuk1?tab=repositories' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon className='about__icon' icon={['fab', 'github']} />
                                </a></li>
                                <li className="footer__media--item"><a href='https://www.linkedin.com/in/igorcf/' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon className='about__icon' icon={['fab', 'linkedin']} />
                                </a></li>
                                <li className="footer__media--item"><a href='https://www.facebook.com/IgorPRI1/' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon className='about__icon' icon={['fab', 'facebook']} />
                                </a></li>
                                <li className="footer__media--item"><a href='https://www.instagram.com/yesimigori/' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon className='about__icon' icon={['fab', 'instagram']} />
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Container>
        </FooterStyles>
    )
}
