import React, {Component} from 'react';
import MenuItem from './Common/MenuItem';
import logoImg from './assets/img/page-wrapper/navbar-logo.svg';
const navbarCollapseClass = 'navbar-shrink';

const menuItems = [
    {href: 'services', itemName: 'About me'},
    {href: 'team', itemName: 'Technologies'},
    {href: 'about', itemName: 'Career'},
    {href: 'portfolio', itemName: 'Personal projects'},
    {href: 'contact', itemName: 'Contact'},
];

const href = 'page-top';

class PageWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapseClass: '',
            position: window.pageYOffset,
            anchorTarget: '',
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        this.setState({anchorTarget: document.getElementById(href)});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
      
    listenToScroll = () => {
        this.setState({
            collapseClass: window.pageYOffset > 100 ? navbarCollapseClass : '',
        })
    }

    handleClick = event => {
        event.preventDefault();
        this.state.anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${this.state.collapseClass}`} id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href={`#${href}`} onClick={this.handleClick}><img src={logoImg} alt="" /></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ml-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                {menuItems.map((menuItem, i) => {
                                    return <li className="nav-item" key={i}>
                                        <MenuItem href={menuItem.href} itemName={menuItem.itemName}/>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default PageWrapper;