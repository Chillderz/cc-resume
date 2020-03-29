import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <main class="overflow--auto">
            <h1 class="color--skyBlue section__heading--largest">
                CHRIS CHILDERS
            </h1>

            <ul class="section--social">

                <li class="socialWrapper">
                    <a class="color--skyBlue social"
                        title="LinkedIn Profile"
                        target="_blank"
                        href="https://www.linkedin.com/in/christopher-childers-28950537/">
                    <i class="fa fa-linkedin"></i>
                    </a>
                </li>

                <li class="socialWrapper color--skyBlue">
                    <a class="social color--skyBlue"
                        title="GitHub Profile"
                        target="_blank"
                        href="https://github.com/Chillderz">
                    <i class="fa fa-github"></i>
                    </a>
                </li>

                <li class="socialWrapper">
                    <a class="social color--skyBlue"
                        title="Resume"
                        href="#">
                    <i class="fa fa-file-text"></i>
                    </a>
                </li>
            </ul>
        </main>
    )
    
}

export default Header;