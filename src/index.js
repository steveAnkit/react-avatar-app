import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from './Avatar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <div>
  <Avatar />
  
  </div>
  ,document.getElementById('root')
);

serviceWorker.unregister();
