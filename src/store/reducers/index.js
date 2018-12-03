import {combineReducers} from 'redux';
import NameReducer from './nameReducer';

const rootReducer = combineReducers({
    name: NameReducer
});

export default rootReducer;