import React, {Component} from 'react';

import dawnImg from '../assets/img/career/dawn.jpg';
import ninjamailsImg from '../assets/img/career/ninjamails.jpg';
import orangeImg from '../assets/img/career/orange.png';

class Career extends Component {
    render(){
        return(
            <section className="page-section" id="about">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Career</h2>
                            <h3 className="section-subheading text-muted">I made my contribution to:</h3>
                        </div>
                        <ul className="timeline">
                            <li>
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src={dawnImg} alt="" /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2015</h4>
                                        <h4 className="subheading">My Humble Beginning</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">I did a MOOC in web development and, from that moment on, I have been working and focusing my career on it.</p></div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src={ninjamailsImg} alt="" /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2016</h4>
                                        <h4 className="subheading">Ninjamails</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">My labor was to develop new functionalities of the page of the company, which consisted of database automatization to contact potential clients. Moreover, I used Frontend technologies (HTML5, Javascript, jQuery,AJAX and Bootstrap) to improve and resolve bugs for Ninjamails website and Backend technologies (JAVA,MongoDB) to extend the functionality of the website.</p></div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image"><img className="rounded-circle img-fluid" src={orangeImg} alt="" /></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2017-2019</h4>
                                        <h4 className="subheading">Orange</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">I was working in a project for ORANGE ESPAGNE SA performing / using respectively the following tasks / tools: (1) Module developing and new functionality for Call Center applications: Angular, Typescript, Grunt, NPM, SVG. (2) Continuous Integration improving test and quality thanks to: Jenkins, Karma, Jasmine, TSLint, Sonar, Nexus. (3) Source-code repository and version control: Git, Gitlab. (4) Documentation and task management: Confluence, JIRA. (5) Agile methodology in tribes: Scrum. (6) CMS: OWCS(Oracle WebCenter Sites). (7) Debug backend with: Eureka, Kibana.</p></div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of My
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
        );
    }
}

export default Career;