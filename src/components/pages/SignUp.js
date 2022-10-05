import React from 'react';
import { useState } from 'react';
import '../../App.css'; 
import './SignUpIn.css';
import { isEmail } from "validator";

const BASE_URL = "http://localhost:8080";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vemail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault()
    const user = {username, email, password}
    console.log(user)

    fetch(BASE_URL + '/api/auth/signup', {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

    }).then(() => {
      console.log("New User created")
      alert("You registered successfully")
    })
  }

    return (
      <div className='sign-up'>
        <img src='' class="card-img" alt=''></img>
        <div class="img-overlay">
          <div class="main-block">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"/>
              <form>
                <label id="icon" for="Username"><i class="fas fa-user"></i></label>
                <input 
                  type='text' 
                  class="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  validations={[required, vusername]} 
                />
                <label id="icon" for="Email"><i class="fas fa-envelope"></i></label>
                <input   
                  type='text' 
                  class="form-control" 
                  placeholder="Email" 
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  validations={[required, vemail]}
                />
                <label id="icon" for="Password"><i class="fas fa-unlock-alt"></i></label>
                <input   
                  type='password' 
                  class="form-control" 
                  placeholder="Password" 
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  validations={[required, vpassword]}
                />
                <p>Already have an account?<a href="/sign-in"> Sign in</a> here.</p>
                <div class="btn-block">
                  <p>By clicking Submit, you agree on our <a href='/'>Privacy Policy</a>.</p>
                  <button class="btn-sub" onClick={handleRegister}>Register</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
}