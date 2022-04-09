import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';

function Footer() {
  return (
    <Container
      fluid={true}
      style={{
        backgroundColor: '#5CA642',
        padding: '1vw 12vw',

        color: 'white',
      }}
      className="font-4"
    >
      <Row className="footer-firstRow">
        <Col className="footer-borderBox">会社概要</Col>
        <Col className="footer-borderBox">プライバシーポリシー</Col>
        <Col>お問合せ先</Col>
        <Col className="footer-iconWithText">
          <div>
            <AiOutlineMail />
          </div>
          <div>xxxxxxx@xxxxx</div>
        </Col>
        <Col className="footer-iconWithText">
          <div>
            <IoMdCall />
          </div>
          <div>000-0000-0000</div>
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        © 2021 xxxxxxxx
      </Row>
    </Container>
  );
}

export default Footer;
