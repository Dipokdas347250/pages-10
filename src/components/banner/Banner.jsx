import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../../assets/banner.png"
import "./banner.css"

const Banner = () => {
  return (
    <section id='banner_part'>
    <Container>
      <div className="">
          <Row>
              <Col lg={6}>
                  <div className="banner_text">
                      <h1>Building stellar websites for early startups</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      <div className="banner_item">
                          <a href="#">View our work</a>
                          <a href="#">View Pricing</a>
                      </div>
                  </div>
              </Col>
              <Col lg={6}>
                  <div className="banner_img">
                      <img src={banner} alt="" />
                  </div>
              </Col>
          </Row>
      </div>
    </Container>
    </section>
  )
}

export default Banner
