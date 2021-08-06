import {combineReducers} from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import { booking } from "./booking"
import { resources } from "./resources"
import { flashMessages } from './flashMessage';
export default combineReducers({
    resources,
    booking,
    flashMessages,
    loadingBar : loadingBarReducer,
})