import React from 'react'
import "./quick.css"
import { Col, Container, Row } from 'react-bootstrap'
import use04 from "../../assets/use04.png"

const Quick = () => {
  return (
    <section id='quick'>
        <Container>
            <Row>
                <Col lg={5}>
                <div className="quick_img">
                <img src={use04} alt="" />
                </div>
                </Col>
                
                <Col lg={{span:6,offset:1}}>
                    <div className="quick_text">
                    <h4>Quick Delivery</h4>
                              <h3>Guranteed 1 week delivery for standard five pager website </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
            
            </Col>
            </Row>
            
        </Container>
    </section>
  )
}

export default Quick
