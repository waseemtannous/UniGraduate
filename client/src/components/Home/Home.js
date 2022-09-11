import React, { Component } from 'react';

function checkLogin() {
    console.log(sessionStorage.getItem('user'));
    if (sessionStorage.getItem('user') === null) window.location.href = '/Login';
}

class Home extends Component {
    state = {  } 

    render() { 
        return (
            <div className="Home">
                {checkLogin()}
                <button onClick={() => {
                    window.location.href = '/CalendarBuilder';
                }}>Calendar Builder</button>


                <button onClick={() => {
                    window.location.href = '/Grades';
                }}>Grades</button>


                <button onClick={() => {
                    window.location.href = '/Courses';
                }}>Courses</button>


                <button onClick={() => {
                    window.location.href = '/Lecturers';
                }}>Lecturers</button>


                <button onClick={() => {
                    window.location.href = '/Teachers';
                }}>Teachers</button>

            </div>
        );
    }
}

export default Home;