import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./faq.css"
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <section id='faq'>
        <Container>
            <Row>
                <Col lg={3}>
                 <div className="faq_text">
                 <h3>Frequently asked questions</h3>
                  <a href="#">Contact us for more info</a>
                 </div>
                </Col>
                <Col lg={{span:8,offset:1}}>
                    <div className="faq_item">
                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> How much time does it take?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is your class naming convention?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do you communicate?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> I have a bigger project. Can you handle it?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is your class naming convention?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                    </div>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Faq
