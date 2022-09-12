import React, { Component } from 'react';
import Select from 'react-select';
import Navbar from "../Navbar/Navbar";
import { checkLogin } from '../../checkLogin';

import 'bootstrap/dist/css/bootstrap.min.css';

class Teachers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchOptions: [],
      teachers: [],
    };
  }

  loadOptions = () => {
    fetch('/getCoursesNames')
    .then(response => response.json())
    .then(data => {
      this.setState({
        searchOptions: data
      });
    });
  }

  handleSearchChange = selectedOption => {
    const courseName = selectedOption.value.replaceAll('-', ' ');
    fetch('/getTeachers/' +  courseName)
    .then(response => response.json())
    .then(data => {
      this.setState({
        teachers: data,
        selectedOption: selectedOption.value
      })
    })
  };

  teachersInfo() {
    if (this.state.teachers.length > 0) {
        return (
            <div className="teachers-info">
                {
                    this.state.teachers.map((teacher, index) => {
                        return (
                            <div className="teacher-info" key={index}>
                                <h4>Name: {teacher.name}</h4>
                                <p>Email: {teacher.email}</p>
                                <p>Phone Number: {teacher.phone}</p>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    }

  
 
  render() { 
    return (
      <div>
        <Navbar></Navbar>
        {checkLogin()}
      <div className="container-fluid h-100">
        <h1>Teachers</h1>
        <hr></hr>
        <div className="row">
          <div className="col-sm-3 border-right">
            <Select 
            onMenuOpen={this.loadOptions}
            options={this.state.searchOptions}
            onChange={this.handleSearchChange}
            />
          </div>
          <div className="col-sm-6 border-start ">
            {this.teachersInfo()}
          </div>
        </div>
      </div>
      </div>
      );
    }
  }

export default Teachers;