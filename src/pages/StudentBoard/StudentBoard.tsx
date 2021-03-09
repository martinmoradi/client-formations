import React from 'react'
import CardDb from '../../components/Card/Card'
import SearchBar from '../../components/SearchBar/SearchBar'

const StudentBoard = () => (
    <>
      <div>
        <div className="sb-cta">
          <h2> Dream up </h2>
          <h3> Learn the latest skills to reach your professional goals.</h3>
          <SearchBar />
        </div>
        <div className="cards-layout">
          <CardDb />
          <CardDb />
        </div>
      </div>
    </>
  )


export default StudentBoard
