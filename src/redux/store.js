import { createStore } from 'redux';
import updateReducer from './updateReducer';

const store = createStore(updateReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;