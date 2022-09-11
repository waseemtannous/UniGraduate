import React, { Component } from 'react';

import Select from 'react-select'

// import fucnctions from './utils.js';

import { getAvailableCourses, addLesturesToAssignment, csp, fillCalendar } from './utils.js';


import 'bootstrap/dist/css/bootstrap.min.css';

class CalendarBuilder extends Component {

  constructor(props) {
    super(props);

    const user  = JSON.parse(sessionStorage.getItem('user'));

    this.state = {
        user: user,
        semester: "A",
        availableCourses: [],
        courses: [],
        minPoints: 10,
        maxPoints: 15,
        availableCoursesSelect: [],
    };
  }

  componentDidMount() {
    fetch('/getCourses')
        .then(res => res.json())
        .then(courses => {
            const availableCourses = getAvailableCourses(this.state.user, courses, this.state.semester);
            const availableCoursesSelect = [];
            for (let i = 0; i < availableCourses.length; i++) {
                availableCoursesSelect.push({value: availableCourses[i].name, label: availableCourses[i].name});
            }
            this.setState({
                courses: courses,
                availableCourses: availableCourses,
                availableCoursesSelect: availableCoursesSelect,
            });
        });

  }

  handleSemesterChange = (event) => {
    const semester = event.target.value;
    const availableCourses = getAvailableCourses(this.state.user, this.state.courses, semester);
    this.setState({
        semester: semester,
        availableCourses: availableCourses
    });
    console.log(availableCourses);
    }

  semesterFilter() {
    // radio buttons selector with A, B, C
    return (
        <div className="row">
            <h3>Choose semester</h3>
            <div className="col-sm-4">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="semester" id="semesterA" value="A" checked={this.state.semester === "A"} onChange={this.handleSemesterChange} />
                    <label className="form-check-label" htmlFor="semesterA">
                        A
                    </label>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="semester" id="semesterB" value="B" checked={this.state.semester === "B"} onChange={this.handleSemesterChange} />
                    <label className="form-check-label" htmlFor="semesterB">
                        B
                    </label>
                </div>
            </div>
        </div>
    );
    }

    addBtn(type1) {
        if (type1) {
            if (this.state.minPoints < 30) {
                this.setState({
                    minPoints: this.state.minPoints + 1,
                });
            }
        } else{
            if (this.state.maxPoints < 30) {
                this.setState({
                    maxPoints: this.state.maxPoints + 1,
                });
            }
        }
    }

    minusBtn(type1) {
        if (type1) {
            if (this.state.minPoints > 0) {
                this.setState({
                    minPoints: this.state.minPoints - 1,
                });
            }
        } else{
            if (this.state.maxPoints > 0) {
                this.setState({
                    maxPoints: this.state.maxPoints - 1,
                });
            }
        }
    }

    pointsFilter() {
        // + and - buttons to add or remove points min and max points
        return (
            <div className="row">
                <h3>Choose points</h3>
                <div className="col-sm-4">
                    <h4 >Min points</h4>
                    <button className="btn btn-primary btn-sm" onClick={() => this.minusBtn(true)}>-</button>
                        {this.state.minPoints}
                    <button className="btn btn-primary btn-sm" onClick={() => this.addBtn(true)}>+</button>
                </div>
                <div className="col-sm-4">
                    <h4 >Max points</h4>
                    <button className="btn btn-primary btn-sm" onClick={() => this.minusBtn(false)}>-</button>
                        {this.state.maxPoints}
                    <button className="btn btn-primary btn-sm" onClick={() => this.addBtn(false)}>+</button>
                </div>
            </div>
        );
    }



    coursesFilter() {
        // select courses from available courses and add them to the selected courses
        return (
            <div className="row">
                <h3>Choose Specific courses</h3>
                <Select
                    isMulti
                    name="Courses"
                    options={this.state.availableCoursesSelect}
                    className="basic-multi-select"
                    classNamePrefix="select"

                />
            </div>
        );
    }




  filters() {
    return (
      <div className="row">
        <h1 className='text-center'>Filters</h1>
        <div className="col-6">
          {this.semesterFilter()}
          {this.pointsFilter()}
        </div>
        <div className="col-6">
          {this.coursesFilter()}
        </div>
      </div>
    );
  }

    render() { 
    return (
      <div className="container-fluid h-100">
        <h1>Calendar Builder</h1>
        <hr></hr>
        {this.filters()}
      </div>
      );
    }
  }

export default CalendarBuilder;