import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import logo from "./t.png";
import "./Home.css"

function checkLogin() {
  console.log(sessionStorage.getItem("user"));
  if (sessionStorage.getItem("user") === null) window.location.href = "/Login";
}

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="Home">
            <Helmet>
                <style>{'body { background-image: url("");  background-color: #d2d2d2; }'}</style>
            </Helmet>
        <nav class="navbar navbar-dark bg-dark justify-content-center">
          <a class="navbar-brand" href="\">
              <img
                src={logo}
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt="" 
              />
              UniGraduate
          </a>
        </nav>
        <div className="centered">
          {checkLogin()}
          <button
            onClick={() => {
              window.location.href = "/CalendarBuilder";
            }}
            className="btn btn-outline-dark btn-lg btn-block"
          >
            Calendar Builder
          </button>
        </div>

        <div className="centered">
          <button
            onClick={() => {
              window.location.href = "/Grades";
            }}
            className="btn btn-outline-dark btn-lg btn-block"
          >
            Grades
          </button>
        </div>

        <div className="centered">
          <button
            onClick={() => {
              window.location.href = "/Courses";
            }}
            className="btn btn-outline-dark btn-lg btn-block"
          >
            Courses
          </button>
        </div>

        <div className="centered">
          <button
            onClick={() => {
              window.location.href = "/Lecturers";
            }}
            className="btn btn-outline-dark btn-lg btn-block"
          >
            Lecturers
          </button>
        </div>

        <div className="centered">
          <button
            onClick={() => {
              window.location.href = "/Teachers";
            }}
            className="btn btn-outline-dark btn-lg btn-block"
          >
            Teachers
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
