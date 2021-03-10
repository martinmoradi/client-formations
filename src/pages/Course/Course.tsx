import React from 'react'
import CalendarEvents from '../../components/Calendar/Calendar'
import CourseList from '../../components/CourseList/CourseList'
import SearchBar from '../../components/SearchBar/SearchBar'

const Course = () => (
    <div>
      <SearchBar />
      <CourseList />
      <CalendarEvents />
    </div>
  )

export default Course
