import React from 'react'
import { useState, useEffect } from 'react'
import './Clock.css'


const Clock = () => {
    const ChooseTime = ({clock},{now = "am"}) => {
        if (clock > 11 ) {
          now = "pm";
        }
            return (
          <div className='s_time'>
                <h3>{clock}:00 <span>{now}</span></h3> 
          </div>
        );
      };
  return (
    <>
        <ChooseTime clock={8} />
        <ChooseTime clock={9}/>
        <ChooseTime clock={10}/>
        <ChooseTime clock={11}/>
        <ChooseTime clock={12}/>
    </>
  )
}

export default Clock