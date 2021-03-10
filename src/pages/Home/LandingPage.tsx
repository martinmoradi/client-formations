import React from 'react';
import StudentImg from '../../assets/images/student1.jpg';

const LandingPage = () => {
  console.log('hello')
  return (
    <div className="home">
      <div className="home-header">
        <h3> Your future start here</h3>
        <p>Learn how to learn <br/>
        Discover the skills of tomorrow.<br />
        And takecharge of your career.</p>
        <button type="button" className="btn-primary">
        Get started
      </button>
      </div>

      <div className="home-img">
        <img src={StudentImg} alt="student" />
    </div>
    </div>
  )
}

export default LandingPage
