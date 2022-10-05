import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Weekends from './components/pages/Weekends';
import Summer2022 from './components/pages/Summer2022';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import { Card } from 'reactstrap';


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Card />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/weekends' component={Weekends} />
          <Route path='/summer2022' component={Summer2022} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;