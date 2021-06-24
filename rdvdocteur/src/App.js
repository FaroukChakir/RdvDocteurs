import { Component } from 'react';
import React, { useState } from 'react';
import logo from './Image/logo.png'
import SigninScreen from './components/SigninScreen';
import RegisterScreen from './components/Registerscreen';
import './components/CalendarCss.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

export default class App extends Component
{



  render()
  {


return(


<div>
  <div className="Head">
    <img src={logo} />
<a href="">Disconnect</a>

<a id="a1" href="/register">
                 create Account
              </a>
<a id="a2" href="/signin">
                  Sign In
              </a>
  </div>
  <div>
  <Router>
 <Route path="/signin" component={SigninScreen} exact />
 <Route path="/register" component={RegisterScreen} exact />
</Router>
</div>
  
</div>
);

  }

}
