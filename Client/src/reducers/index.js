import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './post_reducer';
import postReducer from './post_view_reducer';


const rootReducer = combineReducers({
  post: postReducer,		
  posts: postsReducer,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
