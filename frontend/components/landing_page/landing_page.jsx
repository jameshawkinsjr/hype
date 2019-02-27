import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render () {
        let header = (
            <header className="landing-page-nav flex">
                <div className="landing-page-nav-left flex">
                <Link to="/"><img className="landing-page-logo" src={ window.images.hype_small}/></Link>
                    <div className="landing-page-nav-links">Why Slack?</div>
                    <div className="landing-page-nav-links">Solutions</div>
                    <div className="landing-page-nav-links">Resources</div>
                    <div className="landing-page-nav-links">Pricing</div>
                </div>
                <div className="landing-page-nav-right flex">
                    {/* <div className="landing-page-nav-login">Sign-in</div> */}
                    <div className="landing-page-nav-button">Sign In</div>
                </div>
            </header>
        );
    
        let main = (
            <main className="landing-page-hero flex">
            <section className="hero-image-grid-container">
                    <div className="hero-quote">
                        <h1>Imagine what you'll accomplish together</h1>
                    </div>
                    <div className="hero-description">
                        <h3>Slack is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Slack, your team is better connected.</h3>
                    </div>
                    <div className="hero-get-started">
                        <form className="hero-get-started-input flex">
                        <input type="text" placeholder="Email Address"/>
                        <button>GET STARTED</button>
                        </form>
                        <div className="hero-get-started-link flex">
                        <h3>Already Using Slack? </h3><pre>   </pre><Link to="/login"> <h3>Sign in.</h3> </Link>
                        </div>
                    </div>
                    {/* Middle Hero Image Color */}
                    <img className="hero-image hero-1-color hero-middle-color" src={ window.images.hero_1_color } />
                    <caption className="hero-1-caption hero-image-caption">Autodesk fosters open communication with Slack</caption>
                    <img className="hero-image hero-2-color hero-middle-color" src={ window.images.hero_2_color } />
                    <caption className="hero-2-caption hero-image-caption">Away transforms creativity and customer support with Slack</caption>
                    <img className="hero-image hero-3-color hero-middle-color" src={ window.images.hero_3_color } /> 
                    <caption  className="hero-3-caption hero-image-caption">Molly Moon creates a recipe for success with Slack</caption>
                    {/* Top Left Hero Image Black and White */}
                    <div className="top-left">
                        <img className="hero-image hero-1-bw-tl hero-top-left" src={ window.images.hero_1_bw } />
                        <img className="hero-image hero-2-bw-tl hero-top-left" src={ window.images.hero_2_bw } />
                        <img className="hero-image hero-3-bw-tl hero-top-left" src={ window.images.hero_3_bw } />
                    </div>
                    {/* Bottom Right Her Image Black and White */}
                    <img className="hero-image hero-1-bw-br hero-bottom-right" src={ window.images.hero_1_bw } />
                    <img className="hero-image hero-2-bw-br hero-bottom-right" src={ window.images.hero_2_bw } />
                    <img className="hero-image hero-3-bw-br hero-bottom-right" src={ window.images.hero_3_bw } />
            </section>
            </main>
        );
    
        let footer = (
            <div className="landing-page-hero flex">
            "Footer"
            </div>
        );

        return (
        <div className="landing-page flex">
                { header }
                { main }
                <Link to="/signup"> Sign Up </Link>
                { footer }
        </div>
        )
    }
}

export default withRouter(LandingPage);