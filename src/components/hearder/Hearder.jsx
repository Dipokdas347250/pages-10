import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./hearder.css"
import icon from "../../assets/Icon.png"
import icon01 from "../../assets/Icon01.png"
import icon02 from "../../assets/Icon02.png"
import icon03 from "../../assets/Icon03.png"
import icon04 from "../../assets/Icon04.png"
import icon05 from "../../assets/Icon05.png"


const Hearder = () => {
  return (
    <section id='header'>
        <Container>
            <Row>
                <Col lg={{span:6,offset:3}}>
                    <div className="header_text">
                    <h4>Features</h4>
                    <h2>Design that solves problems, one product at a time</h2>
                    </div>
                
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div className="header_card">
                <img src={icon} alt="" />
                <h2>Uses Client First</h2>
                    <h4>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="header_card">
                <img src={icon01} alt="" />
                <h2>Two Free Revision Round</h2>
                    <h4>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="header_card">
                <img src={icon02} alt="" />
                <h2>Template Customization</h2>
                    <h4>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </h4>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div className="header_card">
                <img src={icon03} alt="" />
                <h2>24/7 Support</h2>
                    <h4>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="header_card">
                <img src={icon04} alt="" />
                <h2>Quick Delivery</h2>
                    <h4>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="header_card">
                <img src={icon05} alt="" />
                <h2>Hands-on approach</h2>
                    <h4>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </h4>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hearder
