import { AUTH_ADMIN, UNAUTH_ADMIN } from '../actions/types';

export default function(state={}, action){
  switch (action.type){
    case AUTH_ADMIN:
      return {...state, authenticated: true};
	case UNAUTH_ADMIN:
      return {...state, authenticated: false};  
  }
  return state;
}
