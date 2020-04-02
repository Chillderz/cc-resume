import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

import { findAllByTestId } from '@testing-library/react';
import '../css/SharedCSS.css'
import '../css/Header.css'

const SocialProfile = (props) => {
    const { title, link, image } = props.socialProfile;

    return (
        <li className="socialWrapper">
            <a className="color--darkgrey social"
                title={title}
                target="_blank"
                href={link}>
            <i className={image}></i>
            </a>
        </li>
    )
}

const Header = () => {
    return(
        <main className="overflow--auto">
            <h1 className="color--darkgrey section__heading--largest">
                CHRIS CHILDERS
            </h1>

            <ul className="section--social">

                {
                
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return (
                            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        );
                    })
                }
            </ul>
        </main>
    )
    
}

export default Header;
export { SocialProfile };