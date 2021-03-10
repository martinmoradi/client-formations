import { ActionType } from './courseTypes';

export const requestCourse = () => ({
  type: ActionType.COURSE_REQUEST,
  isFetching: true,
  isAuthenticated: false,
});
// @ts-ignore
export const receiveCourse = (response) => ({
  type: ActionType.COURSE_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: response.jwt,
  course: response.course,
});

export const courseError = (message: String[]) => ({
  type: ActionType.COURSE_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});