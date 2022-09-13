import React, { Component } from 'react';
import Select from 'react-select';
import Navbar from "../Navbar/Navbar";
import { checkLogin } from '../../checkLogin';

import 'bootstrap/dist/css/bootstrap.min.css';

class Lectures extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchOptions: [],
      feedback: "",
    };

    let { lecturerName } = this.props.match.params;

    const url = new URL(window.location);
    lecturerName = url.searchParams.get('lecturerName');

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

  coursesTaught(courses) {
    if (courses.length > 0) {
      return (
        <div className="pre-requisites">
          <ul>
            {courses.map((course) => {
              return (
                <li>
                  <a href={"/courses?courseName=" + course.courseName.replaceAll(' ', '-')}>{course.courseName}: {course.courseId}</a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    else {
      return (
        <div className="pre-requisites">
          <p>None</p>
        </div>
      );
    }
  };

  lecturerInfo() {
    if (this.state.lecturer) {
      const lecturerName = this.state.lecturer.name;
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
            <h5>Specialties: {
              this.state.lecturer.specialties.map((specialty) => {
                return (
                  <span>{specialty}, </span>
                )
              })
            }</h5>
            <hr></hr>
            <h5>Courses</h5>
            {this.coursesTaught(this.state.lecturer.courses)}

          </div>
        );
      }
    }
  };
  
  saveFeedback() {
    fetch('/addLecturerFeedback/' + this.state.feedback + '/' +  this.state.lecturer.name)
    .then(response => response.json())
    .then(data => {
      this.setState({
        lecturer: data,
        feedback: ''
      })
    })
  }

  handleFeedbackChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  feedback() {
    if (this.state.lecturer) {
      return (
        <div className="feedback">
          <h3>Feedback</h3>

          {
            <div className="form-group">
              <textarea className="form-control" value={this.state.feedback} onChange={this.handleFeedbackChange.bind(this)} rows="1"></textarea>
              <button type="submit" className="btn btn-primary" onClick={this.saveFeedback.bind(this)}>Submit</button>
              <hr></hr>
            </div>
          }

          {
            this.state.lecturer.feedback.map((feedback) => {
              return (
                <div className="feedback-item">
                  <p>{feedback}</p>
                  <hr></hr>
                </div>
              );
            }
          )
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
      <div className="container-fluid h-100 pt-5 mt-3">
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
            {this.feedback()}
          </div>
        </div>
      </div>
      </div>
      );
    }
  }

export default Lectures;