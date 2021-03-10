import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CardDb from '../../../components/Card/Card';
import SearchBar from '../../../components/SearchBar/SearchBar';
import AdminCourses from '../AdminCourses/AdminCourses';

const AdminBoard = () => (
  <>
    <div>
      <h1>Admin | Dashboard</h1>
      <div>
        <ul>
          <li>
            <Link to="/admin/course">Course</Link>
          </li>
          <li>
            <Link to="/admin/classroom">Classroom</Link>
          </li>
          <li>
            <Link to="/admin/session">Session</Link>
          </li>
          <li>
            <Link to="/admin/user">User</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/admin/course">
            <AdminCourses />
          </Route>
        </Switch>
      </div>
    </div>
  </>
);

export default AdminBoard;
