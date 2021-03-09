import React from 'react'
import Calendar from '../../components/Calendar/Calendar';
import StudentBoard from '../StudentBoard/StudentBoard';

const Home = () => (
  <>
    <div>
      <h1>Home | Dashboard</h1>
    </div>
    <div>
      <StudentBoard />
    </div>
    <div>
      <Calendar />
    </div>
  </>
  )

export default Home
