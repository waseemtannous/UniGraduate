import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "./t.png";
import "./Navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="Home">
        <Helmet>
          <style>
            {'body { background-image: url("");  background-color: #d2d2d2; }'}
          </style>
        </Helmet>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-center">
          <a class="navbar-brand" href="\">
            <img
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top mx-2"
              alt=""
            />
            UniGraduate
          </a>
          <div
            class="collapse navbar-collapse centered2 "
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-item nav-link mx-4" href="/Grades">
                Grades
              </a>
              <a class="nav-item nav-link mx-4" href="/Courses">
                Courses
              </a>
              <a class="nav-item nav-link mx-4" href="/Lecturers">
                Lecturers
              </a>
              <a class="nav-item nav-link mx-4" href="/Teachers">
                Teachers
              </a>
              <button
                className="btn btn-danger btn-sm mx-4"
                onClick={() => sessionStorage.removeItem("user")}
              >
                <a class="nav-item nav-link" href="/Login">
                  Logout
                </a>
              </button>
            </div>
          </div>
          <h5 className="text-white mx-2">
            Hello {JSON.parse(sessionStorage.getItem("user")).name}
          </h5>
        </nav>
      </div>
    );
  }
}

export default Navbar;
