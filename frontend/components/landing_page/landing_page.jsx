import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../templates/footer';
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.history.push('/chatrooms/1');
        } else {
            this.props.landingPageSignup(this.state.email);
            this.props.history.push('/signup');
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState( { [type]: e.target.value });
        };
    }
        
    render () {
        const navBar = this.props.currentUser ? (
            <Link to="/chatrooms"><div className="landing-page-nav-button purple-button">YOUR CHANNELS</div></Link>
        ) : (
            <>
            <Link to="/login"><div className="landing-page-nav-login">Sign-in</div></Link>
            <Link to="/signup"><div className="landing-page-nav-button purple-button">GET STARTED</div></Link>
            </>
        );


        let header = (
            <header className="landing-page-nav flex">
                <div className="landing-page-nav-left flex">
                <Link to="/"><img className="landing-page-logo" src={ window.images.hype_small_color}/></Link>
                    <div className="landing-page-nav-links">Why Hype?</div>
                    <div className="landing-page-nav-links">Solutions</div>
                    <div className="landing-page-nav-links">Resources</div>
                    <div className="landing-page-nav-links">Pricing</div>
                </div>
                <div className="landing-page-nav-right flex">                    
                    { navBar }
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
                        <h3>Hype is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Hype, your team is better connected.</h3>
                    </div>
                    <div className="hero-get-started">
                        <form className="hero-get-started-input flex">
                        <input 
                            type="text" 
                            className = "input-outline"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                        <button onClick={this.handleSubmit} >GET STARTED</button>
                        </form>
                        <div className="hero-get-started-link flex">
                        <h3>Already Using Hype? </h3><pre>   </pre><Link to="/login"> <h3>Sign in.</h3> </Link>
                        </div>
                    </div>
                    {/* Middle Hero Image Color */}
                    <img className="hero-image hero-1-color hero-middle-color" src={ window.images.hero_1_color} />
                    <div className="hero-1-caption hero-image-caption">Autodesk fosters open communication with Hype</div>
                    <img className="hero-image hero-2-color hero-middle-color" src={ window.images.hero_2_color} />
                    <div className="hero-2-caption hero-image-caption">Away transforms creativity and customer support with Hype</div>
                    <img className="hero-image hero-3-color hero-middle-color" src={ window.images.hero_3_color} /> 
                    <div  className="hero-3-caption hero-image-caption">Molly Moon creates a recipe for success with Hype</div>
                    {/* Top Left Hero Image Black and White */}
                    <div className="top-left">
                        <img className="hero-image hero-1-bw-tl hero-top-left" src={ window.images.hero_1_bw} />
                        <img className="hero-image hero-2-bw-tl hero-top-left" src={ window.images.hero_2_bw} />
                        <img className="hero-image hero-3-bw-tl hero-top-left" src={ window.images.hero_3_bw} />
                    </div>
                    {/* Bottom Right Her Image Black and White */}
                    <img className="hero-image hero-1-bw-br hero-bottom-right" src={ window.images.hero_1_bw} />
                    <img className="hero-image hero-2-bw-br hero-bottom-right" src={ window.images.hero_2_bw} />
                    <img className="hero-image hero-3-bw-br hero-bottom-right" src={ window.images.hero_3_bw} />
            </section>
            </main>
        );

        return (
        <div className="landing-page flex">
                { header }
                { main }
                < Footer />
        </div>
        )
    }
}

export default withRouter(LandingPage);