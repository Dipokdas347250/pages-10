import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./team.css"
import model from "../../assets/model.png"
import model01 from "../../assets/model 02.png"
import model02 from "../../assets/model 03.png"
import model03 from "../../assets/model.png"

const Team = () => {
  return (
    <section id='team'>
        <Container>
            <Row>
                <Col lg={{span:4,offset:4}}>
                 <div className="team_text">
                 <h2>Meet our team</h2>
                 </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                   <div className="team_card">
                    <img src={model} alt="" />
                    <h4>Sara Hardin</h4>
                         <h5>Project Manager</h5>
                   </div>
                </Col>
                <Col lg={3}>
                   <div className="team_card">
                    <img src={model01} alt="" />
                    <h4>Paul Jones</h4>
                         <h5>Design Lead</h5>
                   </div>
                </Col>
                <Col lg={3}>
                   <div className="team_card">
                    <img src={model02} alt="" />
                    <h4>John Smith</h4>
                         <h5>CEO</h5>
                   </div>
                </Col>
                <Col lg={3}>
                   <div className="team_card">
                    <img src={model03} alt="" />
                    <h4>Simon Adams</h4>
                         <h5>CEO</h5>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Team
