// @ts-nocheck
import React from 'react';
import "antd/dist/antd.css";
import { Calendar } from 'antd';

const CalendarEvents = () => {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8 :
        listData = [
          { type: 'warning', content: 'Javascript' },
          { type: 'normal', content: 'Management' },
        ]; break;
      case 10:
        listData = [
          { type: 'warning', content: 'Project' },
          { type: 'normal', content: 'Project' },
          { type: 'error', content: 'Project' },
        ]; break;
      case 15:
        listData = [
          { type: 'warning', content: 'Lorem Ipsum' },
          { type: 'normal', content: 'TUX Design' },
          { type: 'error', content: 'SEA' },
          { type: 'error', content: 'UML' },
          { type: 'error', content: 'Python application' },
          { type: 'error', content: 'Random course' },
        ]; break;
      default:
    }
    return listData || [];
  }
  
  const dateCellRender =(value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (
            <li key={item.content}>
              <span className={`event-${item.type}`}>●</span>
              {item.content}
            </li>
          ))
        }
      </ul>
    );
  }
  
  // eslint-disable-next-line consistent-return
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <div className="calendar_container">
      <Calendar 
      dateCellRender={dateCellRender} 
      monthCellRender={monthCellRender} />
    </div>
    )
}

export default CalendarEvents
