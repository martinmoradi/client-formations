// @ts-nocheck
import React from 'react';
import ClassroomList from '../../../components/ClassroomList/ClassroomList';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { Classroom } from '../../../types/models';

const AdminClassroom = () => (
    <div>
      <h2>Admin Classroom</h2>
      <ClassroomList />
    </div>
  );

export default AdminClassroom;
