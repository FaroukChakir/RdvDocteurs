import { Component } from "react";
import React, { useState } from "react";
import logo from "./Image/logo.png";
import SigninScreen from "./components/SigninScreen";
import RegisterScreen from "./components/Registerscreen";
import "./components/CalendarCss.css";
import "./components/CalendarCssFarouk.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservation from "./components/Reservation";
import DropDownSeance from "./components/DropDownSeances";
import Reserved from "./components/Reserved";
export default class App extends Component {
  render() {
    return (
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
            <Route exact path="/reservation">
              <Reservation />
            </Route>
            <Route exact path="/dropdown/@:day">
              <DropDownSeance />
            </Route>
            <Route exact path="/reserved/@:day">
              <Reserved />
            </Route>
            <Route path="/register" component={RegisterScreen} exact />
          </Router>
        </div>
      </div>
    );
  }
}
