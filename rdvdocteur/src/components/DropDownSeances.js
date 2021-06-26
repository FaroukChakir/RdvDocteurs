import { Component, useContext } from "react";
import React, { useState } from "react";
import "./CalendarCssFarouk.css";
import logo from "./Image/logo.png";
import {
  Router,
  Route,
  Link,
  BrowserRouter,
  Switch,
  withRouter,
  useHistory,
} from "react-router-dom";
import Reserved from "./Reserved";

var Id = window.location.href
  .toString()
  .substr(window.location.href.toString().lastIndexOf("@") + 1, 2);

var passingChange = "";
var bool = false;
//faroukreact@gmail.com mdp : faroukwa3erfreact service Id : service_850g2v9 name Gmail
export default class DropDownSeance extends Component {
  constructor(props) {
    super(props);
    /* si une séance réservée sa valeur devient true  */
    this.state = {
      RDV: [
        {
          day: "1",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "2",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "3",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "4",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "5",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "6",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "7",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "8",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "9",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "10",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "11",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "12",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "13",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "14",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "15",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "16",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "17",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "18",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "19",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "20",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "21",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "22",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "23",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "24",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "25",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "26",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "27",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "28",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "29",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "30",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
        {
          day: "31",
          seance1: "false",
          seance2: "false",
          seance3: "false",
          seance4: "false",
          seance5: "false",
        },
      ],
      change: "",
      Id: "",
    };
  }

  // componentDidMount()
  // {
  //     firebase.database().ref().on("value",Snapshot=>{
  //         let rdv = [];
  //         Snapshot.forEach(snap => {
  //                 rdv.push(snap.val());
  //         });
  //         this.setState({RDV:rdv});
  //     });
  // }
  handleInput(props) {
    passingChange = this.state.change = props;
  }
  ReservingFunc() {
    var x = passingChange;
    var index = 0;
    const arr = [...this.state.RDV];
    alert(Id);
    for (var i = 0; i < this.state.RDV.length; i++) {
      if (this.state.RDV[i].day == Id) {
        switch (passingChange) {
          case "seance1":
            index = this.state.RDV[i].day;
            arr.map((item) => {
              if (item.day === index) item.seance1 = "true";
            });
            this.setState({ RDV: arr });
            alert("reservé");
            bool = true;
            break;

          case "seance2":
            index = this.state.RDV[i].day;
            arr.map((item) => {
              if (item.day === index) item.seance2 = "true";
            });
            this.setState({ RDV: arr });
            alert("reservé");
            break;

          case "seance3":
            index = this.state.RDV[i].day;
            arr.map((item) => {
              if (item.day === index) item.seance3 = "true";
            });
            this.setState({ RDV: arr });
            alert("reservé");
            break;

          case "seance4":
            index = this.state.RDV[i].day;
            arr.map((item) => {
              if (item.day === index) item.seance4 = "true";
            });
            this.setState({ RDV: arr });
            alert("reservé");
            break;
          case "seance5":
            index = this.state.RDV[i].day;
            arr.map((item) => {
              if (item.day === index) item.seance5 = "true";
            });
            this.setState({ RDV: arr });
            alert("reservé");
            break;
        }
      }
    }
  }
  test() {
    window.location.href = `http://localhost:3000/reserved/@${Id}`;
  }
  render() {
    var Id = window.location.href
      .toString()
      .substr(window.location.href.toString().lastIndexOf("@") + 1, 2);
    console.log(Id);

    const items = [];

    for (var i = 0; i < this.state.RDV.length; i++) {
      if (this.state.RDV[i].day == Id) {
        if (this.state.RDV[i].seance1 === "false") {
          // items.push(<ul>14h-15h</ul><input type="radio" value={this.state.days[i].seance5} key={this.state.days[i].day}/>)
          items.push(
            <input
              id="RDB"
              type="radio"
              onClick={() => this.handleInput("seance1")}
              name="drone"
              value="seance2"
            />
          );
          items.push(<label id="LBL">8h-9h</label>);
          items.push(<br></br>);
        }
        if (this.state.RDV[i].seance2 === "false") {
          // items.push(<ul>14h-15h</ul><input type="radio" value={this.state.days[i].seance5} key={this.state.days[i].day}/>)
          items.push(
            <input
              id="RDB"
              type="radio"
              onClick={() => this.handleInput("seance2")}
              name="drone"
              value="seance2"
            />
          );
          items.push(<label id="LBL">9h-10h</label>);
          items.push(<br></br>);
        }
        if (this.state.RDV[i].seance3 === "false") {
          // items.push(<ul>14h-15h</ul><input type="radio" value={this.state.days[i].seance5} key={this.state.days[i].day}/>)
          items.push(
            <input
              id="RDB"
              type="radio"
              onClick={() => this.handleInput("seance3")}
              name="drone"
              value={this.state.RDV[i].seance3}
            />
          );
          items.push(<label id="LBL">10h-11h</label>);
          items.push(<br></br>);
        }
        if (this.state.RDV[i].seance4 === "false") {
          // items.push(<ul>14h-15h</ul><input type="radio" value={this.state.days[i].seance5} key={this.state.days[i].day}/>)
          items.push(
            <input
              id="RDB"
              type="radio"
              onClick={() => this.handleInput("seance4")}
              name="drone"
              value={this.state.RDV[i].seance4}
            />
          );
          items.push(<label id="LBL">11h-12h</label>);
          items.push(<br></br>);
        }
        if (this.state.RDV[i].seance5 === "false") {
          // items.push(<ul>14h-15h</ul><input type="radio" value={this.state.days[i].seance5} key={this.state.days[i].day}/>)
          items.push(
            <input
              id="RDB"
              type="radio"
              onClick={() => this.handleInput("seance5")}
              name="drone"
              value={this.state.RDV[i].seance5}
            />
          );
          items.push(<label id="LBL">14h-15</label>);
          items.push(<br></br>);
        }
      }
    }

    return (
      <div className="ContainsAll">
        <div className="containerDivInputs">
          <div id="ContainerForRdb">
            <ul style={{ color: "Red", fontWeight: "bold" }}>
              Merci de choisir la Séance
            </ul>

            {items}
          </div>
          <div>
            <Link onClick={this.test}>
              {" "}
              <input type="submit" onClick={() => this.ReservingFunc()} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
