import React from 'react';
import StudentImg from '../../assets/images/student1.jpg';
import GraduateImg from '../../assets/images/graduate.svg';
import TeacherImg from '../../assets/images/teacher.svg';
import InterviewImg from '../../assets/images/interview.svg';

const LandingPage = () => (
  <>
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

  <div className="home-steps">
    <div className="home-steps-item">
      <div className="hsi-img">
        <img src={TeacherImg} alt="teacher"/>
      </div>
    </div>

    <div className="home-steps-item">
      <div className="hsi-img">
      <img src={GraduateImg} alt="graduate" className="graduateImg"/>
      </div>
    </div>

    <div className="home-steps-item">
      <div className="hsi-img">
        <img src={InterviewImg} alt="interview" />
      </div>
    </div>
  </div>
    <div className="home-steps-txt">
      <div className="home-steps-item">
        <h4>Learn with certified teacher</h4>
        <p>Our teachers are here to help <br/>
        and support you during your courses</p>
      </div>
      <div className="home-steps-item">
        <h4>Get an accredited degree </h4>
          <p>Our courses give you a certification <br />
          ath the end of the course </p>
        </div>
        <div className="home-steps-item">
          <h4>Employment guarantee</h4>
          <p>80% of our graduated students <br/>
          find a job within 3 months</p>
        </div>
    </div>
  </>
  )

export default LandingPage
