import React, { useEffect, useState } from "react";
import './CalendarCss.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function SigninScreen(props) {
  return (
    <div className="Inputting" >
      <div>
        <table>
          <tr>
            <td><label>Email   </label></td>
            <td><input type="text" name="email" id="email"></input></td>
          </tr>
          <tr>
          <td><label>Password   </label></td>
          <td><input type="text" name="Password" id="Password"></input> </td>
          </tr>
          <tr></tr>
          <tr>
            <td colSpan="2">
            <input type="submit" id="sign" value="Sign In"></input>
            </td>
          </tr>
          <tr>
          <td>
              <a href="/register">
                  Create Account
              </a>
          </td>
          </tr>
            </table>
      </div>
    </div>
  );
}
export default SigninScreen;
