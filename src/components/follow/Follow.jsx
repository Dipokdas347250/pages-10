import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./follow.css"

const Follow = () => {
  return (
    <section id='follow'>
        <Container>
            <Row>
                <Col lg={3}>
                 <div className="follow_text">
                    <h3>Planning</h3>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                 </div>
                </Col>
                <Col lg={3}>
                 <div className="follow_text">
                    <h3>Conception</h3>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                 </div>
                </Col>
                <Col lg={3}>
                 <div className="follow_text">
                    <h3>Design</h3>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                 </div>
                </Col>
                <Col lg={3}>
                 <div className="follow_text">
                    <h3>Development</h3>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                 </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Follow
