import { Action } from './courseActions';
import { Course } from '../../types/models';
import { ActionType } from './courseTypes';

type CourseState = {
  isFetching: boolean,
  errorMessage: string | null,
  course: Course | null,
}

const initialState = {
  isFetching: false,
  errorMessage: null,
  course: null,
};

const courseReducer = (state = initialState, action: Action): CourseState => {
  switch (action.type) {

    case ActionType.COURSE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case ActionType.COURSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        course: action.payload,
      };

    case ActionType.COURSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
