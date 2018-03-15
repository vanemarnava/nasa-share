import React from 'react';
import ReactDOM from 'react-dom';
// importar firebase
import firebase from 'firebase';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<App />, 
	document.getElementById('root'));
registerServiceWorker();
