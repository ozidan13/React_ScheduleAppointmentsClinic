import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import './Appointment.css'
import Schedule from './Schedule/Schedule'
import Clock from './Clock/Clock'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'


const Appointment = () => {
  
  useEffect(() => {	
		fetchDoctors();
	},[]);

	const [doctorsList, setDoctorsList] = useState([]);

	const fetchDoctors = async () => {
		const {data} = await axios('https://cura-front-end-code-challenge.herokuapp.com/')
    setDoctorsList(data)
		// const doctorsList = await data.json();
		console.log(doctorsList);
		//setDoctorsList(doctorsList.info);
	};


  

  return (
    <div className='container'>
        <div className='schedule_appointment'>
          <h1 className='title'>Schedule Appointment</h1>
          <form>
            <div className='appointment_container'>
              <div className='appointment_form'>
                <div className='fees'>
                  <h2>Fees</h2>
                  <p>$100</p>
                </div>
                <hr></hr>
                <div className='appointment_info'>
                  <h2>Schedule</h2>
                  <div className='schedule_days'>
                    <Schedule />
                  </div>
                  <div className='choose_time'>
                    <h2>Choose Time</h2>
                    <div className='times'>
                      <Clock />
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </form>
          <button type='submit' value='Submit' className='submit_button'>
            <Link to="/successful" className='checkout'>
            Book Appointment
            </Link>
          </button>
        </div>
    </div>
  )
}

export default Appointment