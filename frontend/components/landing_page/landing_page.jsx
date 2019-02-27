import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: true,
            counter: 0
        };
        this.changeHeroClasses = this.changeHeroClasses.bind(this);
    }

    componentDidMount() {
        if(this.state.timeout) {
          this.interval = setInterval(() => {
            this.changeHeroClasses();
          }, 3000);
        }
      }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.setState({ timeout: false});
    }
      
    changeHeroClasses() {
        if (this.state.timeout) {
            const hero_image_1c = document.getElementById('hero-image-1c');
            const hero_image_2c = document.getElementById('hero-image-2c');
            const hero_image_3c = document.getElementById('hero-image-3c');
            const hero_image_1b = document.getElementById('hero-image-1b');
            const hero_image_2b = document.getElementById('hero-image-2b');
            const hero_image_3b = document.getElementById('hero-image-3b');
            // hero_image_1c.classList.toggle("hero_image_hide");
            // hero_image_2c.classList.toggle("hero_image_hide");
            // hero_image_3c.classList.toggle("hero_image_hide");
            // hero_image_1b.classList.toggle("hero_image_hide");
            // hero_image_1b.classList.toggle("hero-top-left");
            // hero_image_2b.classList.toggle("hero_image_hide");
            // hero_image_2b.classList.toggle("hero-top-left");
            // hero_image_3b.classList.toggle("hero-top-left");
            // hero_image_3b.classList.toggle("hero-bottom-right");
        }
    }
        
    render () {
        let header = (
            <header className="landing-page-nav flex">
                <div className="landing-page-nav-left flex">
                <Link to="/"><img className="landing-page-logo" src={ window.images.hype_small } /></Link>
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
                        <form className="hero-get-started-input">
                        <input type="text" placeholder="Email Address"/>
                        <button>GET STARTED</button>
                        </form>
                        <h3>Already Using Slack?</h3><Link to="/login"> Sign in. </Link>
                    </div>
                    <img id="hero-image-1c" className="hero-image hero_1_color hero_image_hide" src={ window.images.hero_1_color } />
                    <img id="hero-image-2c" className="hero-image hero_2_color hero-middle-color" src={ window.images.hero_2_color } />
                    <img id="hero-image-3c" className="hero-image hero_3_color hero_image_hide" src={ window.images.hero_3_color } /> 
                    
                    <img id="hero-image-1b" className="hero-image hero_1_bw hero-top-left" src={ window.images.hero_1_bw } />
                    <img id="hero-image-2b" className="hero-image hero_2_bw hero_image_hide" src={ window.images.hero_2_bw } />
                    <img id="hero-image-3b" className="hero-image hero_3_bw hero-bottom-right" src={ window.images.hero_3_bw } />
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