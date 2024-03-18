import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./work.css"
import work from "../../assets/work01.png"
import work01 from "../../assets/work02.png"
import work02 from "../../assets/work03.png"
import work03 from "../../assets/work04.png"

const Work = () => {
  return (
    <section id='work'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="work_text">
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href="#"> Get in touch with us</a>
                    </div>
                
                </Col>
                <Col lg={{span:6,offset:1}}>
                  <Row>
                    <Col lg={6}>
                    <div className="wokr_item">
                    <img src={work} alt="" />
                    <h3>Strategy</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
                    </Col>
                    <Col lg={6}>
                    <div className="wokr_item">
                    <img src={work01} alt="" />
                    <h3>Wireframing</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                    <div className="wokr_item">
                    <img src={work02} alt="" />
                    <h3>Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
                    </Col>
                    <Col lg={6}>
                    <div className="wokr_item">
                    <img src={work03} alt="" />
                    <h3>Development</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
                    </Col>
                  </Row>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work
