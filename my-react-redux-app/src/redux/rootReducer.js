import { combineReducers } from "redux";
import counterReducer from './Counter/counter.reducer';

//Combine les differents reducers en un seul reducer
const rootReducer = combineReducers({
    counter: counterReducer,    
});

export default rootReducer;