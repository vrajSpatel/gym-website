import React from 'react'
import './intrn.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className='navbar'>

        <div className="mainlogo">
          <div className='mainlogoimage'>
            {/* <img src="assets/mainlogo.jpg" alt="logo" /> */}
          </div>

          <div className="leftsideofnav">
            <div className="linfo">
              <Link to="/">
                <span>P</span>UMP
                <span>F</span>ACTORY
              </Link>
            </div>

            <div className="lmenu">
              <Link to="/exploregym" className="item1">About</Link>
              <Link to="/excercise" className="item1">Exercise</Link>
              <Link to="/traker" className="item1">Traker</Link>
            </div>
          </div>
        </div>

       

        <div className="rightsideofnav">
          
            <button href="/" className="loginclick"><Link to="/login">Login</Link></button>
          
          <div className="loginlogo">

          </div>
        </div>


      </div>

      <div className="extraforheight">

      </div>
    </>
  )
}
