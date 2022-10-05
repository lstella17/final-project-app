import React from 'react';
import axios from 'axios';
import '../../App.css';
import './SignUpIn.css';

const BASE_URL = "http://localhost:8080";

export default class SignIn extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      logged : false
    };
    console.log(this.props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChangeUserName(e) {
  this.setState({
    username: e.target.value
  });
}

onChangePassword(e) {
  this.setState({
    password: e.target.value
  });
}

async onSubmit(e) {
  e.preventDefault();
  try {
    let res = await axios.post(BASE_URL + "/api/auth/signin", {
      username: this.state.username,
      password: this.state.password,
  });
    alert("Welcome, " + res.data.username);
  } catch (err) {
      if (err.response.status === 401) {
        alert(err.response.data.message)
        window.location.reload();
      }
    } 
}

  render() {
    return (
      <div class='sign-in'>
        <img src='' class="card-img" alt=''></img>
        <div class="img-overlay-signin">
          <div class="main-block">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card">
            </img>
            <form onSubmit={this.onSubmit}>
              <label id="icon" for="Username"><i class="fas fa-user"></i></label>
              <input value={this.state.username} onChange={this.onChangeUserName} type='text' class="form-control" placeholder="Username" aria-label="Username" required/>
              <label id="icon" for="Password"><i class="fas fa-unlock-alt"></i></label>
              <input value={this.state.password} onChange={this.onChangePassword} type='password' class="form-control" placeholder="Password" aria-label="Password" required/>
              <p><a href='/'>Forgot password?</a></p>
              <div class="btn-block">
                <p>By clicking Sign in, you agree on our <a href='/'>Privacy Policy</a>.</p>
                <button class="btn-sub" type="submit" href="/">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}