import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Login(props) {
  const [state, changeState] = useState({
    username: "",
    email: "",
    password: "",
    robot: false,
  });


  const handleChange = (event) => {
    const newState = { ...state };
    if (event.target.name === "completed") {
      newState[event.target.name] = !state.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeState(newState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onsubmit(state.username, state.email, state.password, state.robot);
    //toastr.success("Login Successful");
    changeState({
      username: "",
      email: "",
      password: "",
      robot: false,
    });
  };

  return (
    <Form onsubmit={(event) => submitHandler(event)}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="username"
          placeholder="Username"
          value={state.username}
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={(event) => handleChange(event)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          name="robot"
          type="checkbox"
          checked={state.robot}
          label="I am not a robot"
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default Login;
