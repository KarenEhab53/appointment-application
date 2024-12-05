import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Doctor from './Pages/Doctor'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'
const App=()=> {

  return (
    <div className='mx-4 sm:mx-[10%]'> 
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/doctors' element={<Doctor/>}/>
<Route path='/doctors/:speciality' element={<Doctor/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/my-profile' element={<MyProfile/>}/>
<Route path='/my-appointment' element={<MyAppointment/>}/>
<Route path='/my-appointment/:docId' element={<Appointment/>}/>
    </Routes>
    </div>
  )
}

export default App
