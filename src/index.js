/// external modules ///
import React from 'react';
import ReactDOM from 'react-dom';

/// internal modules ///
import App from './App';
// import * as serviceWorker from './serviceWorker';

/// styles ///
import 'reset-css/reset.css';
import 'normalize-css/normalize.css';
import './styles/base.css';
import './styles/index.css';

/***************************************
  APP
***************************************/
ReactDOM.render (
  <App />
, document.getElementById ('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
