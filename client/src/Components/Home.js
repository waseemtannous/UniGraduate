import React, { Component } from 'react';

function checkLogin() {
    if (localStorage.getItem('user') === null) window.location.href = '/'
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

window.onunload = () => {
    // Clear the local storage
    window.MyStorage.clear()
 }
 
export default Home;