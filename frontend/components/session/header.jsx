import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {

    return (
        <div className="session-form-header flex">
            <div className="session-form-header-inner flex">
                <Link to="/"><img className="landing-page-logo" src={ window.images.hype_small_color}/></Link>
            </div>
        </div>   
    )
}

export default Header