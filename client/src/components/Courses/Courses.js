import React, { Component } from 'react';
import Select from 'react-select';
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class Courses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchOptions: []
    };

    const { courseName } = this.props.match.params;
    console.log(courseName);
    this.loadOptions = this.loadOptions.bind(this);
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
    fetch('/getCourse/' +  courseName)
    .then(response => response.json())
    .then(data => {
      this.setState({
        course: data,
        selectedOption: selectedOption.value
      })
    })
  };

  
  gradesTable(course){
    if (course.grades) {
      return (
        <div className="grades-table">
          <h3>Grades</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Semester</th>
                <th scope="col">Average</th>
              </tr>
            </thead>
            <tbody>
              {course.grades.map((grade) => {
                return (
                  <tr>
                    <td>{grade.year}</td>
                    <td>{grade.semester}</td>
                    <td>{grade.average}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  };

  lecturesTimes(course){
    if (course.lectures) {
      return (
        <div className="lectures-times">
          <h3>Lectures Times</h3>
          
              {course.lectures.map((group) => {
                return (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                  {group.map((lecture) => {
                    return (
                          <tr>
                            <td>{lecture.day}</td>
                            <td>{lecture.time}</td>
                          </tr>
                    );
                  })}
                    </tbody>
                  </table>
                );
              })}
        </div>
      );
    }
  };

  courseInfo() {
    if (this.state.course) {
      const courseName = this.state.course.name;
      console.log(courseName);
      if (this.state.course) {
        return (
          <div className="course-info">
            <h3>{this.state.course.name} - {this.state.course.id}</h3>
            <hr></hr>
            {/* todo: add lecturer link*/}
            <h5>lecturer: {this.state.course.lecturer}</h5>
            {/* <p>{course.preRequisites}</p> */}
            <h5>Points: {this.state.course.points}</h5>
            <h5>Semester: {this.state.course.semester}</h5>
            <hr></hr>
            {this.gradesTable(this.state.course)}
            <hr></hr>
            {this.lecturesTimes(this.state.course)}
          </div>
        );
      }
    }
  };

  render() { 
    return (
      <div class="container-fluid h-100">
        <h1>Courses</h1>
        <hr></hr>
        <div class="row">
          <div class="col-sm-3 border-right">
            <Select 
            onMenuOpen={this.loadOptions}
            options={this.state.searchOptions}
            onChange={this.handleSearchChange}
            />
          </div>
          <div class="col-sm-6 border-start ">
            {this.courseInfo()}
            
          </div>
        </div>
      </div>
      );
    }
  }

export default Courses;