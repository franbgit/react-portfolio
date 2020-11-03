import React, {Component} from 'react';

class SingleTechnology extends Component {
    render(){
        return(
            <div className="col-lg-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={this.props.img} alt="" />
                    <h4>{this.props.name}</h4>
                </div>
            </div>
        );
    }
}

export default SingleTechnology;