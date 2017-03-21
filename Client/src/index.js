import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import Login from './components/auth/admin_log';
import Home from './components/home';
import NewPost from './components/posts/new_post';
import EditPost from './components/posts/edit_post';
import promise from 'redux-promise';
import Post from './components/post'
import RequireAuth from './components/auth/require_auth';
import { AUTH_ADMIN } from './actions/types';
import AboutMe from './components/about';
import Contact from './components/contact';
const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  promise
  )(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_ADMIN });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='/post/:id' component={Post} />
        <Route path='/admin/new' component={RequireAuth(NewPost)} />
        <Route path='/about' component={AboutMe} />
        <Route path='/contact' component={Contact} />
      </Route>
      <Route path='/admin' component={Login} />
      <Route path='/edit/:id' component={RequireAuth(EditPost)} />

    </Router>
  </Provider>
  , document.querySelector('.container'));
