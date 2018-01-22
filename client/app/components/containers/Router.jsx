import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainPageContainer from 'components/pages/MainPage/MainPageContainer.jsx';
import CommitsListContainer from 'components/pages/MainPage/CommitsList/CommitsListContainer.jsx';
import RepositoriesContainer from 'components/pages/MainPage/RepositoriesList/RepositoriesListContainer.jsx';
import RepoDetailsPageContainer from 'components/pages/RepoDetailsPage/RepoDetailsPageContainer.jsx';
import store from 'redux/store';

const AppComponent = () => {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <MainPageContainer />
          <Switch>
            <Route exact path="/commits" component={CommitsListContainer} />
            <Route exact path="/repos" component={RepositoriesContainer} />
            <Route exact path="/repodetails" component={RepoDetailsPageContainer} />

            <Redirect from="/" exact to="/main" />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

export default AppComponent;
