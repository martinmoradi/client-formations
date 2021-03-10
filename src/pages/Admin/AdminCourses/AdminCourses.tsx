import React from 'react';
import { List, Avatar } from 'antd';
import SearchBar from '../../../components/SearchBar/SearchBar';
import CourseList from '../../../components/CourseList/CourseList';

const AdminCourses = () => {
  console.log('admin courses');
  return (
    <div>
      <h2>Admin Courses</h2>
      <SearchBar />
      <CourseList />
      ,
    </div>
  );
};

export default AdminCourses;
