import axios from 'axios'
import React from 'react'
import './Doctors.css';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const Doctors = () => {
	
	useEffect(() => {	
		fetchDoctors();
	},[]);

	const [doctorsList, setDoctorsList] = useState([]);

	const fetchDoctors = async () => {
		const {data} = await axios('https://cura-front-end-code-challenge.herokuapp.com/')
    	setDoctorsList(data.info)
		// const doctorsList = await data.json();
		console.log(doctorsList);
		//setDoctorsList(doctorsList.info);
	};



	return (
		<>
		<div className='container'>
			<div className='doctors_container'>
			
			</div>
		</div>
		</>
	);
};

export default Doctors;

/*
<div className='s_doctor'>
					<div className='info'>
						<h2>Doctor Name : {doctorsList.name.firstname} {doctorsList.name.lastname}</h2>
						<p>About : {doctorsList.about} </p>
						<p>Speciallisty : {doctorsList.specialty}</p>
						<p>Availability : Availab</p>
					</div>
					<button type='submit' value='Submit' className='submit_button'>
							<Link to="/appointment" className='checkout'>
							Book Appointment
							</Link>
					</button>
			</div>

*/