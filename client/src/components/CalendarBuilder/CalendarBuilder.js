import React, { Component } from 'react';

import Select from 'react-select'

import { getAvailableCourses, addLesturesToAssignment, csp, fillCalendar } from './utils.js';


import 'bootstrap/dist/css/bootstrap.min.css';

class CalendarBuilder extends Component {

  constructor(props) {
    super(props);

    const user  = JSON.parse(sessionStorage.getItem('user'));

    let calendar = [];
    for (let i = 0; i < 12; i++) {
        let row = [];
        for (let j = 0; j < 6; j++) {
            row.push("");
        }
        calendar.push(row);
    }

    let workingHours = [];
    for (let i = 0; i < 12; i++) {
        let row = [];
        for (let j = 0; j < 6; j++) {
            row.push(false);
        }
        workingHours.push(row);
    }


    this.state = {
        user: user,
        semester: "A",
        availableCourses: [],
        courses: [],
        minPoints: 10,
        maxPoints: 15,
        availableCoursesSelect: [],
        calendar: calendar,
        workingHours: workingHours,
        allCaleldars: [],
        calendarIndex: 0,
        specificCourses: [],
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
    const availableCoursesSelect = [];
    for (let i = 0; i < availableCourses.length; i++) {
        availableCoursesSelect.push({value: availableCourses[i].name, label: availableCourses[i].name});
    }
    this.setState({
        semester: semester,
        availableCourses: availableCourses,
        availableCoursesSelect: availableCoursesSelect,
    });
    }

  semesterFilter() {
    // radio buttons selector with A, B
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
            let newmaxPoints = this.state.maxPoints;
            let newminPoints = this.state.minPoints;
            if (this.state.minPoints < 30) {
                newminPoints = this.state.minPoints + 1;
            }
            if (this.state.maxPoints <= this.state.minPoints) {
                newmaxPoints = newminPoints;
            }
            this.setState({
                maxPoints: newmaxPoints,
                minPoints: newminPoints,
            });
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

            let newmaxPoints = this.state.maxPoints;
            let newminPoints = this.state.minPoints;
            if (this.state.maxPoints > 0) {
                newmaxPoints = this.state.maxPoints - 1;
            }
            if (this.state.maxPoints <= this.state.minPoints) {
                newminPoints = newmaxPoints;
            }
            this.setState({
                maxPoints: newmaxPoints,
                minPoints: newminPoints,
            });
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



    handleMultiChange(option, availableCourses) {
        let specificCoursesName = [];
        for (let i = 0; i < option.length; i++) {
            specificCoursesName.push(option[i].value);
        }

        let specificCourses = [];
        for (let i = 0; i < availableCourses.length; i++) {
            if (specificCoursesName.includes(availableCourses[i].name)) {
                specificCourses.push(availableCourses[i]);
            }
        }

        this.setState({
            specificCourses: specificCourses,
        });
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
                    onChange={(option) => this.handleMultiChange(option, this.state.availableCourses)}
                />
            </div>
        );
    }

    transpose(original) {
        let copy = [];
        for (let i = 0; i < 6; i++) {
            let row = [];
            for (let j = 0; j < 12; j++) {
                row.push(original[j][i]);
            }
            copy.push(row);
        }
        return copy;
    }

    transposeT(original) {
        let copy = [];
        for (let i = 0; i < 12; i++) {
            let row = [];
            for (let j = 0; j < 6; j++) {
                row.push(original[j][i]);
            }
            copy.push(row);
        }
        return copy;
    }


    generateCalendar() {
        // generate calendar
        const user = this.state.user;
        const courses = this.state.availableCourses;
        const semester = this.state.semester;
        const minPoints = this.state.minPoints;
        const maxPoints = this.state.maxPoints;
        const workingHours = this.state.workingHours;
        let calendar = [];
        for (let i = 0; i < 12; i++) {
            let row = [];
            for (let j = 0; j < 6; j++) {
                row.push("");
            }
            calendar.push(row);
        }

        // loop over working hours
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 6; j++) {
                if (workingHours[i][j]) {
                    calendar[i][j] = "working";
                } else {
                    calendar[i][j] = "";
                }
            }
        }

        const allCaleldars = fillCalendar(user, courses, minPoints, maxPoints, semester, false, this.transpose(calendar), this.state.specificCourses);

        alert(allCaleldars.length + " calendars found.");
        if (allCaleldars.length > 0) {
            this.setState({
                allCaleldars: allCaleldars,
                calendar: this.transposeT(allCaleldars[this.state.calendarIndex]),
            });
        } else {
            this.setState({
                allCaleldars: [],
                calendar: calendar,
            });
        }

        
    }

    clearCalendar() {
        let calendar = [];
        for (let i = 0; i < 12; i++) {
            let row = [];
            for (let j = 0; j < 6; j++) {
                row.push("");
            }
            calendar.push(row);
        }

        let workingHours = [];
        for (let i = 0; i < 12; i++) {
            let row = [];
            for (let j = 0; j < 6; j++) {
                row.push(false);
            }
            workingHours.push(row);
        }

        this.setState({
            calendar: calendar,
            workingHours: workingHours,
        });
    }


  filters() {
    return (
      <div className="row">
        <h1 className='text-center'>Filters</h1>
        <div className="col-6">
          {this.semesterFilter()}
          <hr />
          {this.pointsFilter()}
        </div>
        <div className="col-6">
          {this.coursesFilter()}
          <hr />
          <button onClick={() => this.generateCalendar()} className="btn btn-primary btn-lg btn-block">Generate</button>
          <button onClick={() => this.clearCalendar()} className="btn btn-primary btn-lg btn-block">Clear</button>
        </div>
      </div>
    );
  }

    setWorkingHour(hour, day) {
        let workingHours = this.state.workingHours;
        workingHours[hour][day] = !this.state.workingHours[hour][day];
        this.setState({
            workingHours: workingHours,
        });
    }

    getCourseByHourAndDay(hour, day) {
        const course = this.state.calendar[hour][day];

        if (course != "" && course != "working") {
            return(
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">Name: {course.name}</p>
                        <p className="card-text">Points: {course.points}</p>
                    </div>
                </div>
            )
        }
        return "";
    }

    displayCalendar() {
        // display grid of calendar from 8:00 to 20:00
        return (
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Sunday</th>
                            <th scope="col">Monday</th>
                            <th scope="col">Tuesday</th>
                            <th scope="col">Wednesday</th>
                            <th scope="col">Thursday</th>
                            <th scope="col">Friday</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.calendar.map((row, hour) => {
                            return (
                                <tr >
                                    <td>
                                        {8 + hour}:00
                                    </td>
                                    {row.map((obj, day) => {
                                        return (
                                            <td className={this.state.workingHours[hour][day] ? "bg-danger" : "bg-white"} onClick={() => this.setWorkingHour(hour, day)}>
                                                {this.getCourseByHourAndDay(hour, day)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    displayAllCalendars() {

        if (this.state.allCaleldars.length == 0) {
            return "";
        }

        return(
            <div>
                {this.state.allCaleldars.map((calendar, index) => {
                    let courses = [];
                    for(let i = 0; i < calendar.length; i++) {
                        for(let j = 0; j < calendar[0].length; j++) {
                            const course = calendar[i][j];
                            if (typeof(course) == "object" && !courses.includes(course.name)) {
                                courses.push(course.name);
                            }
                        }
                    }
                    return(
                        <button onClick={() => this.setState({calendarIndex: index, calendar: this.state.allCaleldars.length > 0 ? this.transposeT(this.state.allCaleldars[index]) : this.state.calendar})}>
                            <div>
                            <h3>Calendar {index}</h3>
                            {
                                courses.map(course => {
                                  return(
                                    <p>{course}</p>
                                  );  
                                })
                            }
                        </div>
                        </button>
                    );
                })}
            </div>
        );
    }

    render() { 
    return (
      <div className="container-fluid h-100">
        <h1>
            Calendar Builder         
        </h1>
        
        <hr></hr>

        {this.filters()}
        <hr></hr>
        {this.displayAllCalendars()}
        {this.displayCalendar()}
      </div>
      );
    }
  }

export default CalendarBuilder;