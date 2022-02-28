import React, { Component } from 'react';

function checkLogin() {
    console.log(localStorage.getItem('user'));
    // if (localStorage.getItem('user') === null) window.location.href = '/';
}

class Home extends Component {
    state = {  } 

    // if (localStorage.getItem('user') === null) window.location.href = '/'

    // funtion that checks local storage for user
    // if user is not logged in, redirect to login page
    // if user is logged in, redirect to home page

    render() { 
        return (
            <div className="Home">
                {checkLogin()}
            </div>
        );
    }
}

export default Home;