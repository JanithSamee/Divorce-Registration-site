import React from 'react';
import './NavBarLeftSmallComp.css';
import { Container, Row, Col } from 'react-bootstrap';

function NavBarLeftSmallComp() {
  return (
    <Container className="navBarLeftSmallComp-back">
      <Row className="navBarLeftSmallComp-row m-auto">
        <Col>お申し込みはこちら</Col>
        <Col>{'>'}</Col>
      </Row>
    </Container>
  );
}

export default NavBarLeftSmallComp;
