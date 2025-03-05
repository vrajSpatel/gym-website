import React from "react";
import "./intrn.css";
import { Link } from "react-router-dom";
import BeforeLoginImage from "../assets/loginlogoBefore.png";

export default function Navbar() {
  const [reload, setreload] = React.useState(false);
  var token;
  document.cookie.split(";").map((item) => {
    return item.split("=")[0].trim() === "auth-token"
      ? (token = item.split("=")[1])
      : undefined;
  });

  const logout = () => {
    var conformation = window.confirm('are you sure you want to logout');
    if (conformation) {
      document.cookie = 'auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      // window.location.reload();
      setreload((reload) => {
        return !reload;
      })
      console.log(reload)
    }
  }
  // console.log(token);
  return (
    <>
      <div className="navbar">
        <div className="mainlogo">
          <div className="mainlogoimage">
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
              <Link to="/exploregym" className="item1">
                About
              </Link>
              <Link to="/excercise" className="item1">
                Exercise
              </Link>
              <Link to="/traker" className="item1">
                Traker
              </Link>
            </div>
          </div>
        </div>

        <div className="rightsideofnav">
          {token ?
            <button className="loginclick" onClick={logout}>
              <Link>Log Out</Link>
            </button>
            :

            <button className="loginclick">
              <Link to="/login">Login</Link>
            </button>
          }

          <div className="loginlogo">
            <Link to={token ? "/profile" : null}>
              <img src={BeforeLoginImage} alt="loginbeforeimage" />
            </Link>
          </div>
        </div>
      </div>

      <div className="extraforheight"></div>
    </>
  );
}
