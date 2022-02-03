import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [listItems, changeListItems] = useState([]);
  

  useEffect(() => {
    const listContents = localStorage.getItem("list");
    localStorage.removeItem("list");
    changeListItems(JSON.parse(listContents) || []);
  }, []);

  const updateListItems = (id, task, complete) => {
    const listItem = { id, task, complete };
    changeListItems(
      (state) => [...state, listItem],
      localStorage.setItem("list", JSON.stringify([...listItems, listItem]))
    );
  };


  return (
    <BrowserRouter>
      <Navbar bg="primary" expand="md">
        <Navbar.Brand>Social App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="">
             Create Post
            </Link>
            <Link className="nav-link" to="">
              Timeline
            </Link>
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Routes>
          <Route
          path="/Login"
          element={<Login />
          }
          />
          <Route
          />
          <Route
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
