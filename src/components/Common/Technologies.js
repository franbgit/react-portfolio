import React, {Component} from 'react';
import SingleTechnology from './SingleTechnology';

import angularImg from '../assets/img/technologies/angular.png';
import reactImg from '../assets/img/technologies/react.png';
import typescriptImg from '../assets/img/technologies/typescript.png';
import javascriptImg from '../assets/img/technologies/javascript.png';
import html5Img from '../assets/img/technologies/html5.png';
import css3Img from '../assets/img/technologies/css3.png';
import npmImg from '../assets/img/technologies/npm.png';
import gruntImg from '../assets/img/technologies/grunt.png';
import gitImg from '../assets/img/technologies/git.png';
import jQueryImg from '../assets/img/technologies/jquery.png';
import svgImg from '../assets/img/technologies/svg.png';
import karmaImg from '../assets/img/technologies/karma.png';
import jasmineImg from '../assets/img/technologies/jasmine.png';

const members = [
    {name: 'Angular', img: angularImg,},
    {name: 'React', img: reactImg,},
    {name: 'Typescript', img: typescriptImg,},
    {name: 'Javascript', img: javascriptImg,},
    {name: 'HTML5', img: html5Img,},
    {name: 'CSS3', img: css3Img,},
    {name: 'NPM', img: npmImg,},
    {name: 'Grunt', img: gruntImg,},
    {name: 'Git', img: gitImg,},
    {name: 'jQuery', img: jQueryImg,},
    {name: 'SVG', img: svgImg,},
    {name: 'Karma', img: karmaImg,},
    {name: 'Jasmine', img: jasmineImg,},
];
class Technologies extends Component {
    render(){
        return (<section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Technologies</h2>
                    <h3 className="section-subheading text-muted">Experience with:</h3>
                </div>
                <div className="row">
                    {members.map((member, index) => {
                        return <SingleTechnology {...member} key={index} />
                    })}
                </div>
            </div>
        </section>);
    }
}

export default Technologies;