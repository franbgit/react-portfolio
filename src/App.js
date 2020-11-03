import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

// Pages
import Home from './components/Pages/Home';

import PageWrapper from './components/PageWrapper';

class App extends Component {
    render() {
      return (
        <Router>
          <Route
            exact={true}
            path="/"
            render={props => (
                <PageWrapper>
                  <Home {...props} />
                </PageWrapper>
            )}
          />
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
