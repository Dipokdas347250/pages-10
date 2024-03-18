import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon from "../../assets/Icon02.png"
import icon01 from "../../assets/Icon01.png"
import icon02 from "../../assets/Icon.png"
import "./benefits.css"


const Benefits = () => {
  return (
    <section id='benefits'>
        <Container>
            <Row>
                <Col lg={{span:6,offset:3}}>
                 <div className="benefits_text">
                 <h2>The benefits of working with us</h2>
                 </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div className="benefits_item">
                    <img src={icon} alt="" />
                <h2>Customize with ease</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. </h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="benefits_item">
                    <img src={icon01} alt="" />
                <h2>Perfectly Responsive</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. </h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="benefits_item">
                    <img src={icon02} alt="" />
                <h2>Friendly Support</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. </h4>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Benefits
