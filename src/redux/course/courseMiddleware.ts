import { Dispatch } from "redux";
import { Action } from './courseActions';
import { ActionType } from './courseTypes';
import { Course } from '../../types/models';

export const getAllCourses = 
(courseData: Course) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.COURSE_REQUEST
  });
  try {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  };
  const { data } = await (await fetch(`${process.env.REACT_APP_BASE_URL}/v1/courses`, config)).json()

  dispatch ({
    type: ActionType.COURSE_REQUEST,
    payload: data
  })
  } catch (error) {
    dispatch({
      type: ActionType.COURSE_FAILURE,
      payload: error.message,
    })
  }
};
