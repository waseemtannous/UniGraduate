import React, { Component } from 'react';
import Select from 'react-select';
import Navbar from "../Navbar/Navbar";
import { checkLogin } from '../../checkLogin';


import 'bootstrap/dist/css/bootstrap.min.css';

class Courses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchOptions: [],
      feedback: "",
      drive: "https://drive.google.com/drive/folders/0ByGd_S4x6vqNMU5ZaUVEZzZObHc",
      daysMap: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"],
    };

    let { courseName } = this.props.match.params;

    const url = new URL(window.location);
    courseName = url.searchParams.get('courseName');

    fetch('/getCourse/' +  courseName)
    .then(response => response.json())
    .then(data => {
      this.setState({
        course: data
      })
    })
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
      const url = new URL(window.location);
      url.searchParams.set('courseName', courseName.replaceAll(' ', '-'));
      window.history.pushState(null, '', url.toString());
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

  lecturesPerSemester(course, semester) {
    const groups = course.lectures[semester];
    if (!groups) {
      return(
        <p>No lectures in this semester</p>
      );
    }
    return (
      groups.map((group) => {
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
                        <td>{this.state.daysMap[lecture.day]}</td>
                        <td>{lecture.time}</td>
                      </tr>
                );
              })}
            </tbody>
          </table>
        );
      })
    );
  }

  lecturesTimes(course){
    if (course.lectures) {
      return (
        <div className="lectures-times">
          <h3>Lectures Times</h3>

          <div className="semester-lectures">
            <h4>Semester A</h4>
            {this.lecturesPerSemester(course, 'A')}
          </div>

          <div className="semester-lectures">
            <h4>Semester B</h4>
            {this.lecturesPerSemester(course, 'B')}
          </div>

          <div className="semester-lectures">
            <h4>Semester C</h4>
            {this.lecturesPerSemester(course, 'C')}
          </div>
        </div>
      );
    }
  };

  preRequisites(preRequisites) {
    if (preRequisites.length > 0) {
      return (
        <div className="pre-requisites">
          <h5>Pre-Requisites</h5>
          <ul>
            {preRequisites.map((preRequisite) => {
              return (
                <li>
                  <a href={"/courses?courseName=" + preRequisite.courseName.replaceAll(' ', '-')}>{preRequisite.courseName}: {preRequisite.courseId}</a>
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
          <h5>Pre-Requisites</h5>
          <p>None</p>
        </div>
      );
    }
  };

  courseInfo() {
    if (this.state.course) {
      const courseName = this.state.course.name;
      if (this.state.course) {
        return (
          <div className="course-info">
            <h3>{this.state.course.name} - {this.state.course.id}</h3>
            <hr></hr>
            <button className="btn btn-primary" onClick={() => window.open(this.state.drive, "_blank")}>Drive</button>
            <hr></hr>
            <h5>lecturer: 
              <a href={"/lecturers?lecturerName=" + this.state.course.lecturer.replaceAll(' ', '-')}> {this.state.course.lecturer}</a>
            </h5>
            <hr></hr>
            {this.preRequisites(this.state.course.preRequisites)}
            <hr></hr>
            <h5>Points: {this.state.course.points}</h5>
            <hr></hr>
            <h5>Semester: 
              {this.state.course.semesterA ? ' A,' : ''}
              {this.state.course.semesterB ? ' B,' : ''}
              {this.state.course.semesterC ? ' C' : ''}
            </h5>
            <hr></hr>
            {this.gradesTable(this.state.course)}
            <hr></hr>
            {this.lecturesTimes(this.state.course)}
          </div>
        );
      }
    }
  };

  saveFeedback() {
    fetch('/addCourseFeedback/' + this.state.feedback + '/' +  this.state.course.name)
    .then(response => response.json())
    .then(data => {
      this.setState({
        course: data,
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
    if (this.state.course) {
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
            this.state.course.feedback.map((feedback) => {
              return (
                <div className="feedback-item">
                  <p>{feedback}</p>
                  <hr></hr>
                </div>
              );
            }
          )}
        </div>
      );
    }

  }

  render() { 
    return (
      <div>
        <Navbar />
        {checkLogin()}
        <div className="container-fluid h-100 pt-5 mt-3">
        <h1>Courses</h1>
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
            {this.courseInfo()}
            {this.feedback()}
          </div>
        </div>
      </div>
      </div>

      );
    }
  }

export default Courses;