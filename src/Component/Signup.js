import React, { useState } from 'react';
import './intrn.css'; // Import the CSS file for styling
import { Link,useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [credential, setcredential] = useState({ username: "", email: "", password: "" });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setcredential({ ...credential, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your signup logic 

    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credential)

    })
    // console.log(response);

    const jsonfile = await response.json();
    console.log(jsonfile);

    if (!jsonfile.success) {
      alert(jsonfile.msg)
    }
    else{
      navigate('/')
    }

  }

  return (

    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credential.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credential.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credential.password}
          onChange={handleInputChange}
        />
        <button type="submit">Sign Up</button>
        <br />
        <br />
        already have account ?
        <Link to="/login">Login</Link>
      </form>
    </div>

  )
}

export default Signup 
