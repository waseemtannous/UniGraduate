import React, { Component } from "react";
import "./Home.css"
import Navbar from "../Navbar/Navbar";

function checkLogin() {
  console.log(sessionStorage.getItem("user"));
  if (sessionStorage.getItem("user") === null) window.location.href = "/Login";
}

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="Home">
        <Navbar></Navbar>
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
