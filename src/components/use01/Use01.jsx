import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import use from "../../assets/use.png"
import "./use01.css"

const Use01 = () => {
  return (
    <section id='use01' >
        <Container>
            <Row>
                <Col lg={6}>
                <div className="use01_text">
                <h4>Use Client-first</h4>
                              <h3>Top agencies and freelancers around the world use 
                                Client-first </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                </Col>
                <Col lg={{span:5,offset:1}}>
                <div className="use01_img">
                  <img src={use} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Use01
