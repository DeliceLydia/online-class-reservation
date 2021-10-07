import { combineReducers } from 'redux';
import auth from './authen';
// import teachers from './teachersReducer';

const reducer = combineReducers({ auth });

export default reducer;
