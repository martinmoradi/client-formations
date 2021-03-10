import React from 'react'
import CalendarEvents from '../../components/Calendar/Calendar'
import CourseList from '../../components/CourseList/CourseList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Course } from '../../types/models';

const CoursePage = () => {
  const courses: Course[] = [
    {
      title: 'Course Title 1',
    },
    {
      title: 'Course Title 2',
    },
    {
      title: 'Course Title 3',
    },
    {
      title: 'Course Title 4',
    },
  ];
  return (
    <div>
      <SearchBar />
      <CourseList courses={courses} />
      <CalendarEvents />
    </div>
    )
  }


export default CoursePage
