import { Component } from 'react';
import React, { useState } from 'react';
import './CalendarCssFarouk.css'
import logo from './Image/logo.png'
import { Router, Route, Link,BrowserRouter, Switch } from 'react-router-dom'
import emailjs from 'emailjs-com';
var Id = window.location.href.toString().substr(window.location.href.toString().lastIndexOf('@')+1,2);
const monthNames = ["Javier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
];
const monthNumber = new Date();
var currentmonth=monthNames[monthNumber.getMonth()];
var dateReserved ="date réservé le : "+ Id  +" "+ currentmonth ;
export default function Reserved() 
{

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_850g2v9', 'template_n778yf7', e.target, 'user_OfOHoxE216zMHzjCAzCim')
      .then((result) => {
          console.log(result.text);
          window.location.href = `http://localhost:3000/`
      }, (error) => {
          console.log(error.text);
      });
  }

    
   
    return(


    <div  className="ContainsAll">
    <div className="Head">
    <img src={logo} />
    <a href="/">Disconnect</a>
    
    </div>
    <div className="containerDiv" >
    <div className="currentMonth">
        <ul style={{color:'Red',fontWeight:'bold',fontSize:'20px'}} >Votre Réservation a été bien effectuée</ul>
    </div>
    <div className="currentMonth">


    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div className="mail">
      <label>Name</label>
      <input type="text" name="user_name" value="E-Doc" />
      <label>Email</label>
      <input type="email" name="user_email" value="faroukchakir@gmail.com" />
      <label>Message</label>
      <textarea name="message" value={dateReserved} />
      </div>
      <input type="submit" value="Page d'acceuil" />
    </form>

    </div>
      
 
  </div>
  
  
  
  </div>
);
  

}
