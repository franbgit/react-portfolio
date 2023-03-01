import React, {Component} from 'react';

import CareerExcerpt from './CareerExcerpt';

import dawnImg from '../assets/img/career/dawn.jpg';
import ninjamailsImg from '../assets/img/career/ninjamails.jpg';
import orangeImg from '../assets/img/career/orange.png';
import climathonImg from '../assets/img/career/climate-kic.jpg';
import betstartersImg from '../assets/img/career/betstarters.png';

const excerpts = [
    {side: '', img: dawnImg, span: '2015', title: 'My Humble Beginning', description: 'I did a MOOC in web development and, from that moment on, I have been working and focusing my career on it.'},
    {side: 'timeline-inverted', img: ninjamailsImg, span: '2016', title: 'Ninjamails', description: 'My labor was to develop new functionalities of the page of the company, which consisted of database automatization to contact potential clients. Moreover, I used Frontend technologies (HTML5, Javascript, jQuery,AJAX and Bootstrap) to improve and resolve bugs for Ninjamails website and Backend technologies (JAVA,MongoDB) to extend the functionality of the website.'},
    {side: '', img: orangeImg, span: '2017-2019', title: 'Orange', description: 'I was working in a project for ORANGE ESPAGNE SA by using the following technologies: (1) Module developing and new functionality for Call Center applications: Angular, Typescript, Grunt, NPM, SVG. (2) Continuous Integration improving test and quality thanks to: Jenkins, Karma, Jasmine, TSLint, Sonar, Nexus. (3) Source-code repository and version control: Git, Gitlab. (4) Documentation and task management: Confluence, JIRA. (5) Agile methodology in tribes: Scrum. (6) CMS: OWCS(Oracle WebCenter Sites). (7) Debug backend with: Eureka, Kibana.'},
    {side: 'timeline-inverted', img: climathonImg, span: '2020', title: 'Malta\'s Climathon', description: 'My team won a competition by participating in a relentless 30-hour long hackaton developing a mobile-friendly app to focus on how to promote and cultivate sustainable tourism in Malta.'},
    {side: '', img: betstartersImg, span: '2020-2022', title: 'BetStarters', description: 'My main duties were related to the creation and improvement of iGaming websites with the next technologies: (1) Frontend: Angular, Typescript, RxJS, Server-side rendering, Progresive web application. (2) Responsive design: Sass, Angular Material, Bootstrap, NgBootstrap, PrimeNG, SVG Sprites. (3) Backend: Golang (Echo framework), Docker. (4) Source-code repository and version control: Git, Gitlab. (5) Documentation and task management: Confluence, JIRA.'},
];

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
                            {excerpts.map((excerpt, i) => {
                                return <CareerExcerpt {...excerpt} />
                            })}
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