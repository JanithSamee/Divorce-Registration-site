import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
import NavBarLeftSmallComp from './NavBarLeftSmallComp';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="font-4 navbar-custom">
        <Container>
          <Navbar.Brand href="#home">サイト名</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mainNavBar-a">
                特徴
              </Nav.Link>
              <Nav.Link href="#link" className="mainNavBar-a">
                料金
              </Nav.Link>
              <Nav.Link href="#home" className="mainNavBar-a">
                離婚届の証人とは？
              </Nav.Link>
              <Nav.Link href="#link" className="mainNavBar-a">
                ご利用方法
              </Nav.Link>
              <Nav.Link href="#link" className="mainNavBar-a">
                お申し込みはこちら
              </Nav.Link>
              <Nav.Link href="#link">
                <NavBarLeftSmallComp />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
