import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./cardus.css"

const Cardus = () => {
  return (
    <section id='card'>
      <Container>
        <Row>
          <Col lg={{span:6,offset:3}}> 
          <div className="card_text">
          <h2>Our Pricing Plans</h2>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
          </div>
          </Col>
        </Row>
        <Row>
        <Col lg={4}>
         <div className="card_item_one">
         <h3>$299</h3>
                            <h5>Per Design</h5>
                            <h4>Landing Page </h4>
                            <p>When you’re ready to go beyond prototyping in Figma, </p>
                            <div class="card_icon">
                                <a href="#"><i class="fa-solid fa-play"></i> All limited links</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Own analytics platform</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Chat support</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Optimize hashtags</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Unlimited users</a>
                            </div>
                            <div className="one">
                 <a href="#">Get started</a>
                  </div> 
         </div>
        </Col>
        <Col lg={4}>
         <div className="card_item_two">
         <h3>$299</h3>
                            <h5>Per Design</h5>
                            <h4>Landing Page </h4>
                            <p>When you’re ready to go beyond prototyping in Figma, </p>
                            <div class="card_icon">
                                <a href="#"><i class="fa-solid fa-play"></i> All limited links</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Own analytics platform</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Chat support</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Optimize hashtags</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Unlimited users</a>
                            </div>
                            <div className="two">
                 <a href="#">Get started</a>
                  </div> 
         </div>
        </Col>
        <Col lg={4}>
         <div className="card_item_three">
         <h3>$299</h3>
                            <h5>Per Design</h5>
                            <h4>Landing Page </h4>
                            <p>When you’re ready to go beyond prototyping in Figma, </p>
                            <div class="card_icon">
                                <a href="#"><i class="fa-solid fa-play"></i> All limited links</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Own analytics platform</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Chat support</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Optimize hashtags</a>
                            <a href="#"><i class="fa-solid fa-play"></i> Unlimited users</a>
                            </div>
                            <div className="three">
                 <a href="#">Get started</a>
                  </div> 
         </div>
        </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cardus
