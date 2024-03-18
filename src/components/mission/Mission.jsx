import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mission from "../../assets/mission.png"
import mission01 from "../../assets/mission01.png"
import "./mission.css"

const Mission = () => {
  return (
    <section id='mission'>
        <Container>

            <Row>
                <Col lg={6}>
                <div className="mission_text">
                <h4>Our Mission </h4>
                            <h2>Inspire, Innovate,Share</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
                <Col lg={{span:5,offset:1}}>
                 <div className="mission_img">
                    <img src={mission} alt="" />

                 </div>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                 <div className="vision_img">
                    <img src={mission01} alt="" />
                 </div>
                </Col>
                <Col lg={{span:6,offset:1}}>
                <div className="vision_text">
                <h4>Our Vision </h4>
                            <h2>Laser focus</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Mission
