import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import CourseList from '../../../components/CourseList/CourseList';
import ModalSession from '../../../components/Modal/ModalSession';

const AdminCourses = () => {
  console.log('admin courses');
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
