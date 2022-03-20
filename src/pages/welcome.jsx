import React from "react";
import { Link } from "react-router-dom";
// import Background1  from './../images/image2.jpeg'
import Background2  from './../images/welcome.jpg'
import './welcome.css'

import Logo from './../images/alifewithhim logo.png';

export const Welcome = () => {
  return (
    <main 
    className=""
    style={{ backgroundImage: `url(${Background2})`, height: '100vh', overflowY: "hidden", backgroundSize: "cover",  }}
    >

      <section className="glassy border border-white">
        <div className="logo">
          <img src={Logo} alt="" className="rounded float-right mt-4 mr-4" />
        </div>
        <div className="d-flex custom">
          <h1 className="h1 text-white font-weight-bolder text-uppercase display-1">welcome</h1>
          <p className="lead font-weight-bold">Kindly click on the link to register</p>

          <Link to="/register-page" className="btn btn-primary btn-lg px-4 mt-4">Register</Link>
        </div>
      </section>


    </main>
  );
};
