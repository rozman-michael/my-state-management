import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './state/reducers/index';
import actions from './state/actions/index';
import { StoreProvider } from './state/index';

ReactDOM.render(
	<StoreProvider reducers={reducers} actions={actions}>
  		<App/>
	</StoreProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
