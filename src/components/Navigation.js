import React from 'react';

import '../css/SharedCSS.css';
import '../css/Navigation.css';

const Navigation = () => {
    return(
        <div className="buttonArea">
            <button className="navButton" onClick={ () => document.getElementById('workExp').scrollIntoView({ behavior: "smooth"}) }>
                Work Experience
            </button>
            <button className="navButton" onClick={ () => document.getElementById('awsCerts').scrollIntoView({ behavior: "smooth"}) }>
                AWS Certifications
            </button>
        </div>
    )
}

export default Navigation;