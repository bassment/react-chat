import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes/index.jsx';

ReactDOM.render(<Router
    children={routes}
    history={createBrowserHistory()}/>,
  document.getElementById('container'));
