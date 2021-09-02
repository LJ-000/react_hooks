// import { Nav, Navbar, Container } from 'react-bootstrap'
import React, { useState } from "react";
    import { NavLink } from "react-router-dom";
    // import "./NavBar.css";

const Navigation = () => {

      const [click, setClick] = useState(false);
    
      const handleClick = () => setClick(!click);
      return (
        <>
          <nav className="navbar">
            <div className="nav-container">
              <NavLink exact to="/" className="nav-logo">
                Alice's Birthday Party Games! 
                <i className="fas fa-code"></i>
              </NavLink>
    
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="http://localhost:3000/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    to="https://github.com/LJ-000"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Laura's GitHub
                  </NavLink>
                </li>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
            </div>
          </nav>
        </>
      );
    }

// {/* <>
// <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
//     <Container>
//         <Navbar.Brand href="#home"></Navbar.Brand>
//         <Navbar.Toggle aria-controls='responsible-navbar-nav' />
//         <Navbar.Collapse id='responsive-navbar-nav'>
//             <br/>
//             <Nav>
//                 <Nav.Link href='http://localhost:3000/'>Home</Nav.Link>
//                 <Nav.Link href='https://github.com/LJ-000'>Laura's GitHub</Nav.Link>
//             </Nav>
//             </Navbar.Collapse>
// </Container>
// </Navbar>
// </> */}



export default Navigation; 