import Nav from '../Nav/Nav';
import './LayoutS.css';
import Doctors from '../Appointment/Doctors/Doctors';
import {Outlet} from 'react-router-dom'


function Layout() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default Layout