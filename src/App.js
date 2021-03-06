import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
          <PrivateRoute path="/" exact={true} >
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
