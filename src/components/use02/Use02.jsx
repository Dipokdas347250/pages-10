import React from 'react'
import "./use02.css"
import { Col, Container, Row } from 'react-bootstrap'
import use02 from "../../assets/use02.png"

const Use02 = () => {
  return (
    
    <section id='use02'>
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="use02_img">
                    <img src={use02} alt="" />
                    </div>
                
                </Col>
                <Col lg={{span:6,offset:1}}>
                 <div className="use02_text">
                 <h4>Free Revision Rounds</h4>
                              <h3>Get free Revisions and one week of free maintenance </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            
                 </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Use02
