import React from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';
import './Header.css'

const SocialProfile = (props) => {
    const { title, link, image } = props.socialProfile;

    return (
        <li class="socialWrapper">
            <a class="color--skyBlue social"
                title={title}
                target="_blank"
                href={link}>
            <i class={image}></i>
            </a>
        </li>
    )
}

const Header = () => {
    return(
        <main class="overflow--auto">
            <h1 class="color--skyBlue section__heading--largest">
                CHRIS CHILDERS
            </h1>

            <ul class="section--social">

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