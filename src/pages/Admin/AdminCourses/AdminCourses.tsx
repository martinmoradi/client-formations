import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import CourseList from '../../../components/CourseList/CourseList';
import ModalSession from '../../../components/Modal/ModalSession';

const AdminCourses = () => {
  console.log('admin courses');
  const data = [
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
      <h2>Admin Courses</h2>
      <SearchBar />
      <ModalSession />
      <CourseList />
    </div>
  );
};

export default AdminCourses;
