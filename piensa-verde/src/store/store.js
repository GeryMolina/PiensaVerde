import { createStore, applyMiddleware } from 'redux';
import Reducers from '../reducer/reducer';
import thunk from 'redux-thunk';

const middleware= applyMiddleware(thunk);
const store = createStore(Reducers, middleware);

export default store