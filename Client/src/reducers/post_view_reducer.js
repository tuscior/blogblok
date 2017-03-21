import {POST_ERROR, FETCHING_POST, FETCHED_POST, POST_COMMENT, ERROR_COMMENT, POSTING_COMMENT, EDIT_POST, EDIT_ERROR, EDIT_FETCHING} from '../actions/types';


export default function(state={
  postingComment: false,
  errorComment: false,
  postedComment: false,
	postIsFetching: false,
	postErrorFetching: false,
  postingEdit: false,
  errorEdit: false,
  postedEdit: false,
	post: {}
}, action){
  switch(action.type){
  	case FETCHING_POST:
  	return Object.assign({}, state, {
  		postIsFetching: true,
  		postErrorFetching: false
  	})
    case FETCHED_POST:
    return Object.assign({}, state, {
    	postIsFetching: false,
    	postErrorFetching: false,
    	post: action.payload
    })
    case POST_ERROR:
    return Object.assign({}, state, {
    	postErrorFetching: true
    })
    case ERROR_COMMENT:
    return Object.assign({}, state, {
      errorComment: true
    })
    case POST_COMMENT:
    return Object.assign({}, state, {
      postingComment: false,
      errorComment: false,
      postedComment: true
    })
    case POSTING_COMMENT:
    return Object.assign({}, state, {
      postingComment: true,
      errorComment: false,
      postedComment: false,
    })
    case EDIT_ERROR:
    return Object.assign({}, state, {
      errorEdit: true
    })
    case EDIT_FETCHING:
    return Object.assign({}, state, {
      postingEdit: true,
      errorEdit: false,
      postedEdit: false
    })
    case EDIT_POST:
    return Object.assign({}, state, {
      postingEdit: false,
      errorEdit: false,
      postedEdit: true,
    })
    default:
    return state;
}
} 