import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {

    return (
        <div className="session-form-header flex">
            <div className="session-form-header-inner flex">
                <Link to="/"><img className="session-form-header-logo" src="assets/hype_small_color.png"/></Link>
            </div>
        </div>   
    )
}

export default Header