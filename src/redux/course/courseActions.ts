import { Course } from '../../types/models';
import { ActionType } from './courseTypes';

interface CourseAction {
  type: ActionType.COURSE_REQUEST,
};
interface CourseSuccess {
  type: ActionType.COURSE_SUCCESS,
  payload: Course
};

interface CourseFailure {
  type: ActionType.COURSE_FAILURE,
  payload: string
};

export type Action = 
 | CourseAction
 | CourseSuccess
 | CourseFailure