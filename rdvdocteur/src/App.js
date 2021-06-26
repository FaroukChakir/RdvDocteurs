import { Component } from 'react';
import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import Reservation from './Components/Reservation';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import DropDownSeance from './Components/DropDownSeances'
import Reserved from './Components/Reserved'
export default class App extends Component
{
 render(){
   return(
<div>
  <div>

  </div>
  <Router>
      <Switch>
        <Route exact path="/reservation" ><Reservation /></Route>
        <Route exact path="/dropdown/@:day"><DropDownSeance/></Route>
        <Route exact path="/reserved/@:day"><Reserved/></Route>
      </Switch>
    </Router>
>>>>>>> 1292621 (last farou push)
  
</div>
   );
 }

}
