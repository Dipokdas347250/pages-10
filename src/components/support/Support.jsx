import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import use03 from "../../assets/use03.png"
import "./support.css"

const Support = () => {
  return (
    <section id='support'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="support_text">
                <h4>24/7 Support</h4>
                              <h3>Working with us, you will be getting 24/7 priority support </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                </Col>
                <Col lg={{span:5,offset:1}}>
                    <div className="support_img">
                        <img src={use03} alt="" />
                    </div>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Support
