import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import two from "../../assets/group02.png"
import "./aboutus.css"

const Aboutus = () => {
  return (
    <section id='about'>
        <Container>
            <Row>
            <Col lg={5}>
             <div className="about_text">
             <h2>Our designs solve problems</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
             </div>
            </Col>
            <Col lg={{span:5,offset:2}}>
                <div className="about_img">
                    <img src={two} alt="" />
                </div>
            
            </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Aboutus
