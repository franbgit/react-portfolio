import React, {Component} from 'react';
import SingleProject from './SingleProject';

import reactCalculatorImg from '../assets/img/projects/react-calculator.png';
import pagespeedInsightsImg from '../assets/img/projects/pagespeed-insights.png';
import portfolioImg from '../assets/img/projects/portfolio.png';
import angularShopImg from '../assets/img/projects/angular-shop.png';
import reactAgencyImg from '../assets/img/projects/react-agency.png';

const projects = [
    {title: 'React Calculator', subtitle: '', img: reactCalculatorImg, href: 'https://github.com/franbgit/reactCalculator'},
    {title: 'React Portfolio', subtitle: '', img: portfolioImg, href: 'https://github.com/franbgit/react-portfolio'},
    {title: 'Web Performance Optimization', subtitle: '', img: pagespeedInsightsImg, href: 'https://github.com/franbgit/course-pagespeed-insights'},
    {title: 'React Agency', subtitle: '*in progress', img: reactAgencyImg, href: 'https://github.com/franbgit/react-agency'},
    {title: 'Angular Shop', subtitle: '*in progress', img: angularShopImg, href: 'https://github.com/franbgit/angular-shop'},
];

class Projects extends Component {
    render(){
        return(
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Personal projects</h2>
                        <h3 className="section-subheading text-muted">In my spare time I did these:</h3>
                    </div>
                    <div className="row">
                        {projects.map((item, index) => {
                            return <SingleProject {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;