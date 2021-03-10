import Cookies from 'js-cookie';
import { Action } from 'redux';
import { ActionType } from './courseTypes';

type CourseState = {
  isFetching: boolean,
  isAuthenticated: boolean,
  errorMessage: string,
  user: undefined,
}

const initialState = {
  isFetching: false,
  isAuthenticated: !!Cookies.get('id_token'),
  errorMessage: '',
  courses: undefined,
};

const courseReducer = (state = initialState, action: Action) => {
  switch (action.type) {

    case ActionType.COURSE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };

    case ActionType.COURSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        // @ts-ignore
        courses: action.courses,
      };

    case ActionType.COURSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        // @ts-ignore
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default courseReducer;
