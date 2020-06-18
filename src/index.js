import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SC from 'soundcloud';

SC.initialize({
  client_id: 'Vu5tlmvC9eCLFZkxXG32N1yQMfDSAPAA',
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
