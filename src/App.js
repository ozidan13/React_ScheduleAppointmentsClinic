import './App.css';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Doctors from './components/Appointment/Doctors/Doctors';
import Appointment from './components/Appointment/Appointment';
import Successful from './components/Appointment/Successful/Successful'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
	return (
		<div className='App'>
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="about" element={<About />} />
          			<Route path="appointment" element={<Appointment />} />
					<Route path="doctors" element={<Doctors />} />
					<Route path="successful" element={<Successful />} />  
				</Route>
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
