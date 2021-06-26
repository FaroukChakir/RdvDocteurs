import React, { useEffect, useState, useContext } from "react";
import "./CalendarCss.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faKey} from '@fortawesome/free-solid-svg-icons'
//import { faAt} from '@fortawesome/free-solid-svg-icons'
//import { faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { ContextFirebase } from "../firetest/firebase";
import firebasecontext from "../firetest/context";

function RegisterScreen(props) {
  
  const firebase = useContext(firebasecontext);
  const data = {
    Nom: "",
    call:"",
    adress:"",
    email1: "",
    Password1: "",
    Password2: "",
  };

  const [logindata, setlogindata] = useState(data);
  const [error, seterror] = useState("");

  const handelchange = (e) => {
    setlogindata({ ...logindata, [e.target.id]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    firebase
      .signupuser(logindata.Nom,logindata.call,logindata.adress,logindata.email1, logindata.Password1)
      .then((user) => {
        setlogindata({ ...data });
      })
      .catch(error => {
        seterror(error);
        setlogindata({ ...data });
      });
  };

  const btn =
    logindata.Nom === "" ||
    logindata.call === "" ||
    logindata.adress === "" ||
    logindata.email1 === "" ||
    logindata.Password1 === "" ||
    logindata.Password2 === "" ||
    logindata.Password1 !== logindata.Password2 ? (
      <input type="submit" id="sign" value="Add" disabled></input>
    ) : (
      <input type="submit" id="sign" value="Add"></input>
    );

  //gestion erreurs
  const errormsg = error !== "" && <span>{error.message}</span>;
  return (
    <div className="Inputting" onsubmit={handlesubmit}>
      <div>
        <table>
          <tr>
            <td>
            {errormsg}
              <label style={{ fontWeight: "bold" }}>Full Name* </label>
            </td>
            <td>
              <input
                onChange={handelchange}
                value={logindata.Nom}
                type="text"
                name="Nom"
                id="Nom"
                required
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label style={{ fontWeight: "bold" }}>phone number* </label>
            </td>
            <td>
              <input
                onChange={handelchange}
                value={logindata.email1}
                type="text"
                name="call"
                id="call"
                required
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label style={{ fontWeight: "bold" }}>Address* </label>
            </td>
            <td>
              <input
                onChange={handelchange}
                value={logindata.email1}
                type="text"
                name="Address"
                id="Address"
                required
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label style={{ fontWeight: "bold" }}>Email* </label>
            </td>
            <td>
              <input
                onChange={handelchange}
                value={logindata.email1}
                type="text"
                name="email1"
                id="email1"
                required
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label style={{ fontWeight: "bold" }}>Password* </label>
            </td>
            <td>
              <input
                onChange={handelchange}
                value={logindata.Password1}
                type="text"
                name="Password1"
                id="Password1"
                required
              ></input>{" "}
            </td>
          </tr>
          <tr>
            <td>
              <label style={{ fontWeight: "bold" }}>Re-Enter Password* </label>
            </td>
            <td>
              <input
                onChange={handelchange}
                value={logindata.Password2}
                type="text"
                name="Password2"
                id="Password2"
                required
              ></input>{" "}
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td colSpan="2">{btn}</td>
          </tr>
          <tr>
            <td>
              <a href="/signin">i'm patients</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default RegisterScreen;
