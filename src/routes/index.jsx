import React from 'react';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import { Route, IndexRoute } from 'react-router';
import ChatStore from '../stores/ChatStore';

function requireAuth(nextState, replace) {
  var state = ChatStore.getState();
  if (!state.user) {
    replace({ nextPathname: nextState.location.pathname }, '/login');
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Chat} />
    <Route path="chat" component={Chat} onEnter={requireAuth}>
      <Route path="chat/:channel" component={Chat} />
    </Route>
    <Route path="login" component={Login} />
  </Route>
);

export default routes;
