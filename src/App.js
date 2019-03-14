import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getStories,
  getUserStories,
  getStory,
  filterStoriesByCountry,
  registerUser,
  loginUser,
  addStory
} from './actions';
import CoordinatorHomeView from './views/CoordinatorHomeView';
import CreateStoryView from './views/CreateStoryView';
import DonorHomeView from './views/DonorHomeView';
import EditStoryView from './views/EditStoryView';
import LoginView from './views/LoginView';
import StoryView from './views/StoryView';
import RegisterView from './views/RegisterView';

class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      localStorage.setItem('token', this.props.token);
      localStorage.setItem('curid', this.props.curid);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <DonorHomeView
                {...props}
                getStories={this.props.getStories}
                stories={this.props.stories}
                filterStoriesByCountry={this.props.filterStoriesByCountry}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <RegisterView
                {...props}
                registerUser={this.props.registerUser}
                isRegistering={this.props.isRegistering}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <LoginView
                {...props}
                isLogginIn={this.props.isLogginIn}
                loginUser={this.props.loginUser}
              />
            )}
          />
          <Route
            exact
            path="/coordinator"
            render={props => (
              <CoordinatorHomeView {...props}
                               userstories={this.props.userstories}
                               getUserStories={this.props.getUserStories}
                                />
            )}
          />
            path="/:id"
            render={props => (
              <StoryView
                {...props}
                getStory={this.props.getStory}
                story={this.props.story}
              />
            )}
          />
          <Route
            exact
            path="/coordinator/create-story"
            render={props => (
              <CreateStoryView {...props} addStory={this.props.addStory} />
            )}
          />
          <Route
            exact
            path="/coordinator/:id/edit-story"
            component={EditStoryView}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    stories: state.story.visibleStories,
    userstories: state.story.userstories,
    isLogginIn: state.auth.isLogginIn,
    isRegistering: state.auth.isRegistering,
    story: state.story.story
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getStories,
      getStory,
    getUserStories,
      addStory,
      filterStoriesByCountry,
      registerUser,
      loginUser
    }
  )(App)
);
