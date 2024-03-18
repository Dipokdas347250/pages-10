import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import group from "../../assets/Group.png"
import "./content.css"

const Content = () => {
  return (
    <section id='content'>
        <Container>
           <Row>
            <Col lg={3}>
                <div className="content_text">
                <h2>What our clients say about us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
            </Col>
            <Col lg={{span:8,offset:1}}>
            <div className="content_textone">
            <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                <img src={group} alt="" />
                <h4>Jenny Wilson</h4>
                <h5>Vice President</h5>
            </div>
            </Col>
            </Row> 
        </Container>
     </section>
  )
}

export default Content
