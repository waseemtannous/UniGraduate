import React, { Component } from "react";
import {Helmet} from 'react-helmet';
import logo from "./t.png";
import "./Home.css"

class Navbar extends Component {
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
      </div>
    );
  }
}

export default Navbar;
