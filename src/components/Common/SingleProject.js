import React, {Component} from 'react';

class SingleProject extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" href={this.props.href} target={this.props.title}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fab fa-github-alt fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.img} alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.title}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProject;