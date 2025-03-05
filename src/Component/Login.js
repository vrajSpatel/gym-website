import React, { useState } from 'react';
import './intrn.css'; // Import the CSS file for styling
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading,setIsLoading] =useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
    console.log(data)
  };

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}`;
  }

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    var result = await fetch('http://localhost:5000/api/signin', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json()
    console.log(result)

    if (result.success) {
      setCookie("auth-token",result.token,10)
      setTimeout(() => {
        navigate('/')
      }, 2000);   
    }
    
  };

  return (
    isLoading ? <h1>loading...</h1>:
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
        <br />
        <br />
        Don't have an account?
        <Link to="/signup">SignUp</Link>
      </form>
    </div>
  );
};

export default Login;