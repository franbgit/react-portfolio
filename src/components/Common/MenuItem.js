import React, {Component} from 'react';

class MenuItem extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      anchorTarget: ''
    }
  }
  
  componentDidMount(){
    this.setState({anchorTarget: document.getElementById(this.props.href)});
  }

  handleClick = event => {
    event.preventDefault();
    this.state.anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  render(){
    return <a href={`#${this.props.href}`}
      onClick={this.handleClick}
      className={`nav-link js-scroll-trigger ${this.props.active}`}
      aria-label={`Scroll to ${this.props.itemName}`}>
      {this.props.itemName}
    </a>
  }

}

export default MenuItem;