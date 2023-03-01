import React, {Component} from 'react';
import img from '../assets/img/about-me/photo.jpg';

const socialNetworks = [
    {target: 'linkedin', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/francisco-b-b31119113/'},
    {target: 'github', icon: 'fab fa-github-alt', url: 'https://github.com/franbgit/'},
];

class AboutMe extends Component {
    render() {
        return (
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About me</h2>
                    <div className={this.props.containerClass}>
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={img} alt="" />
                            <h4>{this.props.name}</h4>
                            <p className="text-muted">{this.props.job}</p>
                            {socialNetworks.map((socialNetwork, i) => {
                                return <a className="btn btn-dark btn-social mx-2" target={socialNetwork.target} href={socialNetwork.url} key={i}><i className={socialNetwork.icon}></i></a>
                            })
                            }
                        </div>
                    </div>
                    <h3 className="section-subheading text-muted">I studied for a Informatics Engineering Degree at Rey Juan Carlos University, where I was taught several fields of Computer Science such as computer architecture, distributed systems, databases, Software engineering and so on. One of the things which took my curiosity was web development, which I started with an online course. From that moment on I have been working and focusing my career on it. Currently I have five years of experience as a software programmer, mainly in Front-end. I have been working for companies in the telecom and iGaming sectors but I am open to other industries.</h3>
                </div>
            </div>
        </section>
        );
    }
}

export default AboutMe;