/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/authReducer';
import courseReducer from './course/courseReducer';

const rootReducer = combineReducers({
  courses:courseReducer,
  auth: authReducer,
});

const reduxDevTools = (): string | undefined  => {
  if (process.env.NODE_ENV !== "production") {
    return "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
  }  
  return undefined
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
        // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => console.log(store.getState()));
