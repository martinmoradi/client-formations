import React from 'react';
import SessionList from '../../../components/SessionList/SessionList';
import ModalSession from '../../../components/Modal/ModalSession';

const AdminSessions = () => (
  <div>
    <h2>Admin Sessions</h2>
    <ModalSession />
    <SessionList />
  </div>
);

export default AdminSessions;
