import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: true
        };
        this.changeHeroClasses = this.changeHeroClasses.bind(this);
    }

    componentDidMount() {
        if(this.state.timeout) {
          this.interval = setInterval(() => {
            this.changeHeroClasses();
          }, 1000);
        }
      }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.setState({ timeout: false});
    }
      
    changeHeroClasses() {
        if (this.state.timeout) {
            console.log("working");
        }
    }
        
    render () {
        let header = (
            <header className="landing-page-nav flex">
                <div className="landing-page-nav-left flex">
                    <img src={ window.images.hype_small } />
                    <div className="landing-page-nav-links">Why Slack?</div>
                    <div className="landing-page-nav-links">Solutions</div>
                    <div className="landing-page-nav-links">Resources</div>
                    <div className="landing-page-nav-links">Pricing</div>
                </div>
                <div className="landing-page-nav-right flex">
                    <div className="landing-page-nav-login">Sign-in</div>
                    <div className="landing-page-nav-button">Get Started</div>
                </div>
            </header>
        );
    
        let main = (
            <main className="landing-page-hero flex">
            <section className="hero-image-grid-container">
                    <div className="hero-quote">
                        <h1>Image what you'll accomplish together</h1>
                    </div>
                    <div className="hero-description">
                        <h3>Slack is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Slack, your team is better connected.</h3>
                    </div>
                    <div className="hero-get-started">
                        <h1>Email Address</h1>
                        <button>Get Started</button>
                        <button>Already Using Slack?</button>
                    </div>
                    <img className="hero-image hero_2_color" src={ window.images.hero_2_color } />
                    <img className="hero-image hero_1_color hero_image_hide" src={ window.images.hero_1_color } />
                    <img className="hero-image hero_3_color hero_image_hide" src={ window.images.hero_3_color } /> 
                    
                    <img className="hero-image hero_1_bw" src={ window.images.hero_1_bw } />
                    <img className="hero-image hero_3_bw" src={ window.images.hero_3_bw } />
                    <img className="hero-image hero_2_bw hero_image_hide" src={ window.images.hero_2_bw } />
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