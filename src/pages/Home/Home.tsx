import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import AdminBoard from '../Admin/AdminBoard/AdminBoard';
import StudentBoard from '../StudentBoard/StudentBoard';

const Home = () => (
  <>
    <div>
      <h1>Home | Dashboard</h1>
    </div>
    <div>
      <Calendar />
    </div>
  </>
);

export default Home;
