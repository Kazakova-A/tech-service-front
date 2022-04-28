import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { configureStore, history } from './store/store';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Employees from './pages/Employees';
import Notification from './components/Notification';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Menu />
        <Switch>
          <Route path="/employees"><Employees /></Route>
          <Route path="/jobs"><Jobs /></Route>
          <Route path="/">
            <Home />
            <Notification />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default memo(App);
