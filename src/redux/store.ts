/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import courseReducer from './course/courseReducer';

const rootReducer = combineReducers({
  course: courseReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
        // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => console.log(store.getState()));
