import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./our.css"
import our from "../../assets/Card.png"
import our1 from "../../assets/Card01.png"
import our2 from "../../assets/Card02.png"

const Our = () => {
  return (
    <section id='our'>
    <Container>
        <Row>
            <Col >
            <div className="our_text">
                <h2>View our projects</h2>
                <a href="#">View More</a>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg={8}>
                <div className="card_img">
                <img src={our} alt="" />
                </div>
                <div className="card_text">
                <h2>Workhub office Webflow Webflow Design</h2>
                 <h3>View project</h3>
                </div>
            
            </Col>
            <Col lg={4}>
            <Row>
                <Col >
                 <div className="card_img01">
                    <img src={our1} alt="" />
                 </div>
                 <div className="card_text01">
                              <h2>Unisaas Website
                                  Design</h2>
                              <h3>View projects</h3>
                 </div>
                </Col>
            </Row>
            <Row>
                <Col >
                 <div className="card_img02">
                    <img src={our2} alt="" />
                 </div>
                 
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Our
