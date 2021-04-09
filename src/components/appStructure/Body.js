import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

import ReactDoc from "../subjects/React";
import CSharp from "../subjects/C#";
import TwoDUnity from "../subjects/2dUnity";
import ThreeDUnity from "../subjects/3dUnity";

const Body = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(name);
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home" >{name ? name : "Subjects"}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link name="React" onClick={(e) => setName(e.target.name)}>
            React Docs
          </Nav.Link>
          <Nav.Link name="C#" onClick={(e) => setName(e.target.name)}>
            C# Docs
          </Nav.Link>
          <Nav.Link name="2D Unity" onClick={(e) => setName(e.target.name)}>
            2D Unity
          </Nav.Link>
          <Nav.Link name="3D Unity" onClick={(e) => setName(e.target.name)}>
            3d Unity
          </Nav.Link>
        </Nav>
      </Navbar>

      {name === "React" && <ReactDoc />}
      {name === "C#" && <CSharp />}
      {name === "2D Unity" && <TwoDUnity />}
      {name === "3D Unity" && <ThreeDUnity />}
    </div>
  );
};

export default Body;
