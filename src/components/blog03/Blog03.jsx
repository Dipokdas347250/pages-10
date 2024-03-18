import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import our01 from "../../assets/our 01.png"
import our02 from "../../assets/our 02.png"
import our03 from "../../assets/our 03.png"
import our04 from "../../assets/our 04.png"
import our05 from "../../assets/our 05.png"
import our06 from "../../assets/our 06.png"
import "./blog03.css"

const Blog03 = () => {
  return (
    <section id='our'>
        <Container>
            <Row>
                <Col lg={{span:2,offset:5}}>
                <div className="our_part">
                <h2>Our Blog</h2>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div className="our_item">
                    <img src={our01} alt="" />
                    <h4>27 Jan 2021</h4>
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>View Pricing </h5>
                </div>
                </Col>
                <Col lg={4}>
                <div className="our_item">
                    <img src={our02} alt="" />
                    <h4>27 Jan 2021</h4>
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>View Pricing </h5>
                </div>
                </Col>
                <Col lg={4}>
                <div className="our_item">
                    <img src={our03} alt="" />
                    <h4>27 Jan 2021</h4>
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>View Pricing </h5>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                <div className="our_item">
                    <img src={our04} alt="" />
                    <h4>27 Jan 2021</h4>
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>View Pricing </h5>
                </div>
                </Col>
                <Col lg={4}>
                <div className="our_item">
                    <img src={our05} alt="" />
                    <h4>27 Jan 2021</h4>
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>View Pricing </h5>
                </div>
                </Col>
                <Col lg={4}>
                <div className="our_item">
                    <img src={our06} alt="" />
                    <h4>27 Jan 2021</h4>
                        <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>View Pricing </h5>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog03
