import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';

const Main = props => {
  <Provider>
    <App />
  </Provider>
}

ReactDOM.render(<Main />, document.getElementById('root'));