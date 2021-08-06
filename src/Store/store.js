import { createStore } from 'redux';
import reducer from '../Reducers'
import middleWare from '../MiddleWares'


const store = createStore(reducer,middleWare)

export default store