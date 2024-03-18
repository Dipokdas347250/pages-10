import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <section id='footer'>
    <Container>
        <Row>
            <Col lg={5}>
            <div className="footer_text">
            <img src={logo} alt="" />
            <p>We are always open to discuss your project and improve your online presence.</p>
            </div>
            <Row>
                <Col>
                <div className="footer_one">
                <Row>
                    <Col lg={6}>
                    <div className="footer_two">
                        <h4>Email me at</h4>
                        <h5>contact@website.com</h5>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="footer_two">
                        <h4>Call us</h4>
                        <h5>0927 6277 28525</h5>
                    </div>
                    </Col>
                </Row>
                </div>
                
                </Col>
            </Row>
            </Col>
            <Col lg={{span:4,offset:1}}>
                <div className="footer_item">
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                </div>
            
            </Col>
            
        </Row>
        <Row>
            <Col>
            <div className="footer_menu">
                <div className="footer_four">
                    <h4>Copyright 2022, Finsweet.com</h4>
                </div>
                <div className="footer_five">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
            
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Footer
