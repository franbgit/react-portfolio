import React, {Component} from 'react';

class CareerExcerpt extends Component {
    render() {
        return <li class={this.props.side}>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={this.props.img} alt="dawn" /></div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{this.props.span}</h4>
                    <h4 className="subheading">{this.props.title}</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">{this.props.description}</p></div>
            </div>
        </li>
    }
}

export default CareerExcerpt;