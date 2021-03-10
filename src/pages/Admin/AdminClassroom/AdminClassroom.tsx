import React from 'react';
import ClassroomList from '../../../components/ClassroomList/ClassroomList';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { Classroom } from '../../../types/models';

const AdminClassroom = () => {
  const classrooms: Classroom[] = [
    {
      title: 'Classroom 1',
    },
    {
      title: 'Classroom 2',
    },
    {
      title: 'Classroom 3',
    },
    {
      title: 'Classroom 4',
    },
  ];

  return (
    <div>
      <h2>Admin Courses</h2>
      <SearchBar />
      <ClassroomList classrooms={classrooms} />
    </div>
  );
};

export default AdminClassroom;
