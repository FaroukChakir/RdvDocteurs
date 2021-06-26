import { Component } from 'react';
import React, { useState } from 'react';
import './CalendarCssFarouk.css'
import logo from './Image/logo.png'
import { Router, Route, Link,BrowserRouter, Switch } from 'react-router-dom'
import DropDownSeance from './DropDownSeances'

export default class Reservation extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      days : [
        {day :1},{day :2},{day :3},{day :4},{day :5},{day :6},{day :7},{day :8},{day :9},
        {day :10},{day :11},{day :12},{day :13},{day :14},{day :15},{day :16},{day :17},{day :18},
        {day :19},{day :20},{day :21},{day :22},{day :23},{day :24},{day :25},{day :26},{day :27}
        ,{day :28},{day :29},{day :30},{day :31}
      ],
      
      };

  }
  
  
  handleInput(e) {
   
    
}



  render()
  {
    //Arrays To Append
    const items = [];
    //Function To Append



    var dt = new Date();

    /* to create calendar*/
 var month = dt.getMonth() + 1;
 var year = dt.getFullYear();
 var daysInMonth = new Date(year, month, 0).getDate();
    /**/

/*Last Day of prev month */

 var date = new Date();
date.setMonth(date.getMonth())
var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
var lastDayOfLastMonth = lastDay.toISOString().substr(8, 2);
/**/

/*Current Month*/

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthNumber = new Date();
var currentmonth=monthNames[monthNumber.getMonth()];
/**/
var todayDate = new Date().toLocaleString().substr(0,2);
/*Generating Calendar*/

   for (var i = 0 ; i<daysInMonth;i++) {
     if(i===0)
     {
      items.push(<Link className=".disabled-link" to={`/dropdown/@${this.state.days[i].day}`}><div className="LastDay" key={lastDayOfLastMonth}><button disabled>{lastDayOfLastMonth}</button></div></Link>)

     }
    if(this.state.days[i].day<todayDate)
    {

    items.push(<Link className=".disabled-link" to={`/dropdown/@${this.state.days[i].day}`}><div  className="LastDay" key={this.state.days[i].day}><button disabled="true" value={this.state.days[i].day}>{this.state.days[i].day}</button></div></Link>)
    }else
    {

        
        if(this.state.days[i].day==todayDate)
        {
            items.push(<Link className=".disabled-link" to={`/dropdown/@${this.state.days[i].day}`}><div  className="todayCalendar" key={this.state.days[i].day}><button disabled="true" value={this.state.days[i].day} >{this.state.days[i].day}</button></div></Link>)
            
        }
        else
        {

            items.push(<Link to={`/dropdown/@${this.state.days[i].day}`}><div  className="DayCalendar" key={this.state.days[i].day}><button onClick={e => this.handleInput(e, "value")} value={this.state.days[i].day} >{this.state.days[i].day}</button></div></Link>)
        }
    }
     

  }
return(


<div  className="ContainsAll">
  <div className="Head">
    <img src={logo} />
    <a href="/">Disconnect</a>
    
  </div>
  <div className="containerDiv" >
    <div className="currentMonth">
        <ul style={{color:'Red',fontWeight:'bold'}} >Merci de choisir la date</ul>
    </div>
  <div className="currentMonth">
        <ul>{currentmonth}</ul>
    </div>
    <div id="transparency">
        {items}
    </div>
      
 
  </div>
  
  
  
</div>
);

  }

}
