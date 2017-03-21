import { FETCH_POSTS } from '../actions/types';
import { IS_FETCHING } from '../actions/types';
import { ERROR_FETCHING} from '../actions/types';


export default function(state={
	isFetching: false,
	errorFetching: false,
	posts: {}
}, action){
  switch(action.type){
  	case IS_FETCHING:
  	return Object.assign({}, state, {
  		isFetching: true,
  		errorFetching: false
  	})
    case FETCH_POSTS:
    return Object.assign({}, state, {
    	isFetching: false,
    	errorFetching: false,
    	posts: action.payload
    })
    case ERROR_FETCHING:
    return Object.assign({}, state, {
    	errorFetching: true
    })
  default:
  return state;
}
}
