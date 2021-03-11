import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import CourseList from '../../../components/CourseList/CourseList';
import ModalSession from '../../../components/Modal/ModalSession';
import { Course } from '../../../types/models';

const AdminCourses = () => (
    <div>
      <h2>Admin Courses</h2>
      <SearchBar />
      <ModalSession />
      <CourseList />
    </div>
);

export default AdminCourses;
