import Cookies from 'js-cookie';
import { Dispatch } from "redux";
import {
  requestCourse,
  receiveCourse,
  courseError,
} from './courseActions';
import { Course } from '../../types/models';

const BASE_URL = 'https://api-formations-prod.herokuapp.com/api'

export const getAllCourses = 
(courseData: Course) => (dispatch: Dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  };

  dispatch(requestCourse());
  fetch(
    `${BASE_URL}/v1/courses`,
    config
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(courseError(response.message));
      } else {
        Cookies.set('id_token', response.jwt);
        dispatch(receiveCourse(response));
      }
    });
};
