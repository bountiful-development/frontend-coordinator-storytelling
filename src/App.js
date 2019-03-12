import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CoordinatorHomeView from './views/CoordinatorHomeView';
import CreateStoryView from './views/CreateStoryView';
import DonorHomeView from './views/DonorHomeView';
import EditStoryView from './views/EditStoryView';
import LoginView from './views/LoginView';
import StoryView from './views/StoryView';
import RegisterView from './views/RegisterView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={DonorHomeView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
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

export default App;
