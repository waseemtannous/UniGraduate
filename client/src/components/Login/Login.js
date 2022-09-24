import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";
import logo from "./t.png";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    const userInfo = {
      userEmail: event.target[0].value,
      userPassword: event.target[1].value
    };

    fetch('/Login/' + userInfo.userEmail + '/' + userInfo.userPassword , userInfo)
      .then(response => response.json())
      .then(data => {
        if (data._id) {
          sessionStorage.setItem('user', JSON.stringify(data));
          window.location.href = '/';
        }
        else {
          alert('Wrong email or password')
        }
        });


    console.log(userInfo);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    event.preventDefault();
  }

  return (
    <div className="Login">
        <Helmet>
          <style>
            {'body { background-image: url("");  background-color: #d2d2d2; }'}
          </style>
        </Helmet>
        <div className="text-center ">
        <img
              src={logo}
              width="150"
              height="150"
              class="d-inline-block align-top mx-2"
              alt=""
            />
        <h1 className="p3 my-1">UniGraduate</h1>
        <p classname="font-monospace">Please sign in to countinue</p>
          
        </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className = "">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="mt-4">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
        <Button className="px-5 mt-5 mb-3" block size="lg" type="submit" disabled={!validateForm()}>
          Log in
        </Button>

        </div>

        <div className="text-center">
        <hr/>
          {/* redirect to /signup */}
        <p classname="font-monospace">If you don't have an account, Sign up to countinue</p>

        <Button className="px-5 my-1" block size="lg" onClick={() => window.location.href = "/Signup"}>
          Sign up
        </Button>

        </div>
      </Form>
    </div>
  );
}