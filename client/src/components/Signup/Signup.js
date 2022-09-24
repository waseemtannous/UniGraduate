import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";
import Select from 'react-select';



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      id: "",
      searchOptions: [],
      specificCourses: [],
    };
  }

  componentDidMount() {
    this.loadOptions();
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  loadOptions(){
    fetch('/getCoursesNames')
    .then(response => response.json())
    .then(data => {
      this.setState({
        searchOptions: data
      });
    });
  }

  displayCourses(){
    let courses = [];
    for(let i = 0; i < this.state.specificCourses.length; i++){
      courses.push(this.state.specificCourses[i]);
    }

    // display each course name with text box for grade
    return courses.map((course, index) => {
      return (
        <Form.Group controlId={course.courseName} key={index}>
          <Form.Label>{course.courseName} Grade:</Form.Label>
          <Form.Control
            type="text"
            value={this.state.specificCourses[index].courseGrade}
            onChange={(e) => {
              let specificCourses = this.state.specificCourses;
              specificCourses[index].courseGrade = e.target.value;
              console.log(specificCourses[index]);
              this.setState({ specificCourses });
            }}
          />
          <hr/>
        </Form.Group>

      );
    });
  }

  handleMultiChange(option, allCourses) {
    let specificCoursesName = [];
    for (let i = 0; i < option.length; i++) {
      let courseObject = {
        courseName: option[i].label,
        courseGrade: 0
      }
        specificCoursesName.push(courseObject);
    }
    this.setState({
        specificCourses: specificCoursesName,
    });
  }

  handleSubmit() {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      id: this.state.id,
      courses: this.state.specificCourses,
    };

    console.log(user);

    fetch('/signup',{
      method: 'POST',
      body: JSON.stringify({
        user: user
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      window.location.href = "/Login";
    });
  }

  render() {
    return (
      <div className="Login">
          <Helmet>
            <style>
              {'body { background-image: url("");  background-color: #d2d2d2; }'}
            </style>
          </Helmet>
          <div className="text-center ">
          
          <h1 className="p3 my-1">UniGraduate</h1>
          <p classname="font-monospace">Please sign up to countinue</p>
            
          </div>
        <Form onSubmit={() => this.handleSubmit()}>

        <Form.Group size="lg" controlId="name">
            <Form.Label className="mt-4">Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="email">
            <Form.Label className = "mt-4">Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label className="mt-4">Password</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="id">
            <Form.Label className="mt-4">Id</Form.Label>
            <Form.Control
              type="text"
              value={this.state.id}
              onChange={(e) => this.setState({id: e.target.value})}
            />
          </Form.Group>

  
          <div className="col my-5">
            <h3 className="text-center">Select your courses</h3>
              <Select
                  isMulti
                  name="Courses"
                  options={this.state.searchOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(option) => this.handleMultiChange(option, this.state.searchOptions)}
                />
          </div>

          {this.displayCourses()}

          <div className="text-center">
          <Button variant="outline-dark" className="px-5 my-1" block size="lg" type="submit" disabled={!(this.validateForm())}>
            Signup
          </Button>
  
          </div>
        </Form>
      </div>
    );
  }
}

export default Signup;