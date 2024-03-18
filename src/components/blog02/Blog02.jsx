import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./blog02.css"
import peo from "../../assets/peopie.png"

const Blog02 = () => {
  return (
   <section id='blog02' >
    <Container>
        <Row>
            <Col lg={{span:8,offset:1}}>
             <div className="blog02_case">
             <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                    <h5>Posted on 27th January 2021</h5>
             </div>
            </Col>
        </Row>
        <Row>
            <Col>
             <div className="blog02_img">
                <img src={peo} alt="" />
             </div>
            </Col>
        </Row>
        <Row>
            <Col lg={{span:8,offset:1}}>
            <div className="blog02_more">
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        <h5>Read more</h5>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Blog02
