import React, {Component} from 'react';

import image from '../assets/img/header/header-bg.jpg';

// Re-usable components
import Header from '../Common/Header';
import AboutMe from '../Common/AboutMe';
import Technologies from '../Common/Technologies';
import Career from '../Common/Career';
import Projects from '../Common/Projects';
import Contact from '../Common/Contact';

class Home extends Component {
    render(){
        return (
            <div>
                <Header 
                    title="Welcome To My Portfolio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={false}
                    image={image}
                />

                <AboutMe />
                <Technologies />
                <Career />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default Home;