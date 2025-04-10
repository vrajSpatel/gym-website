import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar.js'
import Mainpage from './Component/Mainpage.js';
import Login from './Component/Login.js'
import Signup from './Component/Signup';
import Location from './Component/Location.js';
import Footer from './Component/Footer.js';
import Exploregym from './Component/Exploregym.js';
import AboutMembership from './Component/AboutMembership.jsx';
import Diet from './Component/Diet.jsx';
import Exercise from './Component/Exercise.jsx';
import Tracker from './Component/Tracker.jsx';
import ContactUs from './Component/ContactUs.jsx';
// import AddExercise from './Component/AddExercise.jsx';
import Profile from './Component/Profile.jsx';

function App() {
  // const useLocation = useLocation()
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Mainpage></Mainpage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path='/location' element={<Location></Location>}></Route>
          <Route path='/exploregym' element={<Exploregym></Exploregym>}></Route>
          <Route path='/aboutmembership' element={<AboutMembership></AboutMembership>}></Route>
          <Route path='/diet' element={<Diet></Diet>}></Route>
          <Route path='/excercise' element={<Exercise></Exercise>}></Route>
          <Route path='/traker' element={<Tracker></Tracker>}></Route>
          <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
          {/* <Route path='/addexercise' element={<AddExercise></AddExercise>}></Route> */}
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
