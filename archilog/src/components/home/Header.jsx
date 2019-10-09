import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Vitrine from "../Vitrine";

function Header() {
  return (
    <div className="header">
      <Navbar
        className="navb"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Link to="/archilog">
          <img src="/images/logo.png" className="logoimg" alt="logo"></img>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="btnnav">
            <Link to="/souscrire">
              <Button variant="success">S'inscrire</Button>
            </Link>
            <Link to="/se_connecter">
              <Button variant="outline-success">Se connecter</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="navb" bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Dropdown>
              <Dropdown.Toggle variant="outline-success" className="dropdown">
                Tutoriels pratiques
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/design">
                  Design && Illustration
                </Dropdown.Item>
                <Dropdown.Item href="/log_2d">
                  Logiciels de conception 2D
                </Dropdown.Item>
                <Dropdown.Item href="/log_3d">
                  Logiciels de conception 3D
                </Dropdown.Item>
                <Dropdown.Item href="/animation">Animation 3D</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="outline-success" className="dropdown">
                Cours
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/design">
                  Design && Illustration
                </Dropdown.Item>
                <Dropdown.Item href="/log_2d">
                  Logiciels de conception 2D
                </Dropdown.Item>
                <Dropdown.Item href="/log_3d">
                  Logiciels de conception 3D
                </Dropdown.Item>
                <Dropdown.Item href="/animation">Animation 3D</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="outline-success" className="dropdown">
                E-Books
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="books/design">
                  Design && Illustration
                </Dropdown.Item>
                <Dropdown.Item href="books/log_2d">
                  Logiciels de conception 2D
                </Dropdown.Item>
                <Dropdown.Item href="books/log_3d">
                  Logiciels de conception 3D
                </Dropdown.Item>
                <Dropdown.Item href="books/animation">
                  Animation 3D
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Vitrine />
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Recherche"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Recherche</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
