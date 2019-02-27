import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer flex">
                <div className="footer-left">
                    <Link to="/"><img className="footer-logo" src={ window.images.hype_small_color}/></Link>
                </div>
                <div className="footer-right flex">
                        <ul className="footer-green">
                            <p>SLACK ♥</p>
                            <li><Link to="/">Why Slack?</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">News</Link></li>
                            <li><Link to="/">Careers</Link></li>
                        </ul> 
                        <ul className="footer-red">
                            <p>USING SLACK</p>
                            <li><Link to="/login">Log In</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul> 
                        <ul>
                            <p className="footer-blue">HANDY LINKS</p>
                            <li><a href="https://github.com/jameshawkinsjr">Github</a></li>
                            <li><a href="https://linkedin.com/in/jshawkins/">LinkedIn</a></li>
                            <li><a href="http://jameshawkins.com/">Portfolio</a></li>
                        </ul> 
                </div>
        </div>   
    )
}

export default Footer