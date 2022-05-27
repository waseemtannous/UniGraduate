import React, { Component } from 'react';
import Select from 'react-select';

import 'bootstrap/dist/css/bootstrap.min.css';

class Lectures extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchOptions: []
    };

    let { lecturerName } = this.props.match.params;

    console.log(lecturerName);

    const url = new URL(window.location);
    lecturerName = url.searchParams.get('lecturerName');

    console.log(lecturerName);

    fetch('/getLecturer/' +  lecturerName)
    .then(response => response.json())
    .then(data => {
      this.setState({
        lecturer: data
      })
    })
  }

  loadOptions = () => {
    fetch('/getlecturersNames')
    .then(response => response.json())
    .then(data => {
      this.setState({
        searchOptions: data
      });
    });
  }

  handleSearchChange = selectedOption => {
    const lecturerName = selectedOption.value.replaceAll('-', ' ');
    fetch('/getlecturer/' +  lecturerName)
    .then(response => response.json())
    .then(data => {
      this.setState({
        lecturer: data,
        selectedOption: selectedOption.value
      })
      const url = new URL(window.location);
      url.searchParams.set('lecturerName', lecturerName.replaceAll(' ', '-'));
      window.history.pushState(null, '', url.toString());
    })
  };

  lecturerInfo() {
    if (this.state.lecturer) {
      const lecturerName = this.state.lecturer.name;
      console.log(lecturerName);
      if (this.state.lecturer) {
        return (
          <div className="lecturer-info">
            <h3>{this.state.lecturer.name}</h3>
            <hr></hr>
            <h5>Email: {this.state.lecturer.email}</h5>
            <hr></hr>
            <h5>Phone: {this.state.lecturer.phone}</h5>
            <hr></hr>
            <h5>Room: {this.state.lecturer.room}</h5>
            <hr></hr>
            {/* todo:*/}
            <h5>Specialties: {this.state.lecturer.specialties}</h5>
          </div>
        );
      }
    }
  };

  render() { 
    return (
      <div className="container-fluid h-100">
        <h1>lecturers</h1>
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
            {this.lecturerInfo()}
            
          </div>
        </div>
      </div>
      );
    }
  }

export default Lectures;