import React, { Component } from 'react';
import './intrn.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
    console.log('Logging in with:', this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Login</button>
          <br />
          <br />
          Don't have account? 
          <Link to="/signup">SignUp</Link>
        </form>
      </div>
    );
  }
}

export default Login;
