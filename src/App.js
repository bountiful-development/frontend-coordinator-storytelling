import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, loginUser } from './actions';
import CoordinatorHomeView from './views/CoordinatorHomeView';
import CreateStoryView from './views/CreateStoryView';
import DonorHomeView from './views/DonorHomeView';
import EditStoryView from './views/EditStoryView';
import LoginView from './views/LoginView';
import StoryView from './views/StoryView';
import RegisterView from './views/RegisterView';

class App extends Component {

  componentDidUpdate(prevProps){
    if(prevProps.token !== this.props.token){
      localStorage.setItem('token', this.props.token)
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={DonorHomeView} />
          <Route exact path="/register" render={props => (
            <RegisterView {...props} registerUser={this.props.registerUser} />
          )} />
          <Route exact path="/login" render={props => (
            <LoginView {...props} loginUser={this.props.loginUser} />
          )} />
          <Route exact path="/:id" component={StoryView} />
          <Route
            exact
            path="/coordinator/:id/create-story"
            component={CreateStoryView}
          />
          <Route
            exact
            path="/coordinator/:id/edit-story"
            component={EditStoryView}
          />
          <Route
            exact
            path="/coordinator/:id"
            component={CoordinatorHomeView}
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default withRouter(connect(mapStateToProps, 
                            { registerUser,
                              loginUser })(App));
