import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

// reducers
import reducers from './reducers';

// import main style dependency file
import './index.css';

// pages
import SignIn from './views/signin';
import Page404 from './views/errors/404';
import App from './App';

// create store
let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={SignIn} />
				<Route path="/app" component={App} />
				<Route component={Page404} />
			</Switch>
		</HashRouter>
	</Provider>,
    document.getElementById('root')
);
