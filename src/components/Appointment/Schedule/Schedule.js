import React from 'react'
import { useState, useEffect } from 'react'
import './Schedule.css'

const Schedule = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
     setIsActive(current => !current);
    };
    
    const Day = ({ day }, {calender = 10}) => {
          return (
        <div style={{
          backgroundColor: isActive ? '#4894FE' : '',
          color: isActive ? 'white' : '',
        }}
        // onClick={handleClick}
        className='day'>
                      <h3>{day}</h3>
                      <p>{calender}</p>
        </div>
      );
      };
  return (
    <>
            <Day day={"Sun"} />
            <Day day={"Mon"} />
            <Day day={"Tue"} />
            <Day day={"Wed"} />
            <Day day={"Thu"} />
    </>
  )
}

export default Schedule