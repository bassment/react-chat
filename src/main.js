import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import routes from './routes/index.jsx';

ReactDOM.render(<Router
    children={routes}
    history={createHashHistory({ queryKey: false })}/>,
  document.getElementById('container'));
