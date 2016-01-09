import React from 'react';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import { Route, IndexRoute } from 'react-router';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Chat} />
    <Route path="chat" component={Chat} />
    <Route path="login" component={Login} />
  </Route>
);

export default routes;
