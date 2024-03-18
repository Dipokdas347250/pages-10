import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import man from "../../assets/man.png"
import "./who.css"

const Who = () => {
  return (
   <section id='who'>
    <Container>
        <Row>
            <Col lg={5}>
            <div className="who_text">
            <h4>Who we are</h4>
                        <h3>Goal focussed</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            </Col>
            <Col lg={{span:6,offset:1}}>
            <div className="who_item">
            
                        <h3>Continuous improvement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            </Col>
            <Col>
             <div className="who_img">
                <img src={man} alt="" />
             </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Who
