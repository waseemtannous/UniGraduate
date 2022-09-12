import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { checkLogin } from '../../checkLogin';

import 'bootstrap/dist/css/bootstrap.min.css';

class Grades extends Component {

  constructor(props) {
    super(props);

    const user  = sessionStorage.getItem('user');

    this.state = {
        user: user,
        edit: false,
    };
  }

    minusBtn = (index) => {
        const user = this.state.editUser;
        if (user.grades[index].grade > 0) {
            user.grades[index].grade--;
            this.setState({
                editUser: user,
            });
        }
    }

    addBtn = (index) => {
        const user = this.state.editUser;
        if (user.grades[index].grade < 100) {
            user.grades[index].grade++;
            this.setState({
                editUser: user,
            });
        }
    }


  showGrades() {
      let gradesList = [];
      if (this.state.edit == true) {
        const grades = this.state.editUser.grades;
        gradesList = grades.map((grade, index) => {
            return (
                <tr>
                    <td>{grade.courseName}</td>
                    <td>{grade.courseId}</td>
                    <td>{grade.points}</td>
                    <td>
                        <button className="btn btn-primary btn-sm" onClick={() => this.minusBtn(index)}>-</button>
                        {grade.grade}
                        <button className="btn btn-primary btn-sm" onClick={() => this.addBtn(index)}>+</button>
                    </td>
                </tr>
    
            );
        });
    } else {
        const grades = this.state.user.grades;
        console.log(grades);
        gradesList = grades.map((grade) => {
            return (
                <tr>
                    <td>{grade.courseName}</td>
                    <td>{grade.courseId}</td>
                    <td>{grade.points}</td>
                    <td>
                        {grade.grade}
                    </td>
                </tr>
    
            );
        });
    }
        
    

    return (
        <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Id</th>
                        <th>Points</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {gradesList}
                </tbody>
            </table>
        );
    }


    getGpa() {
        const actualGpa = this.state.user.gpa;
        if (this.state.edit) {
            const grades = this.state.editUser.grades;
            const sumPoints = grades.reduce((acc, grade) => {
                return acc + parseInt(grade.points);
            }, 0);
            let sum = 0;
            grades.forEach((grade) => {
                sum += parseInt(grade.grade) * parseInt(grade.points);
            }
            );
            const gpa = (sum / sumPoints).toFixed(2)
            const diff = (gpa - actualGpa).toFixed(2);
            return (
                <div
                    className={diff < 0 ? "alert alert-danger" : "alert alert-success"}
                >
                    <strong>GPA: </strong>
                    {gpa}
                    <br />
                    <strong>Difference: </strong>
                    {diff}
                </div>
            );
               
        }
        return (
            <h2>GPA: {this.state.user.gpa}</h2>
        );
    }

    editBtn = () => {
        const editFlag = this.state.edit

        this.setState({
            edit: !editFlag,
            editUser: JSON.parse(JSON.stringify(this.state.user))
        });
    }
  
    render() { 
    return (
    <div>
        <Navbar></Navbar>
        {checkLogin()}
      <div className="container-fluid h-100">
        <h1>Grades</h1>
        <hr></hr>
        <div className="row">
          <div className="col-sm-6 border-right">
            <div className="row">
                <div className="col-md-6">
                    <h2>Courses</h2>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={this.editBtn} disabled={!this.state.user.grades}>
                        {this.state.edit ? "Done" : "Edit"}
                    </button>
                </div>
            </div>
            {this.state.user.grades ? this.showGrades() : <h2>No Grades</h2>}
          </div>
          <div className="col-sm-3 border-start ">
            {this.getGpa()}
          </div>
        </div>
      </div>
      </div>
      );
    }
  }

export default Grades;