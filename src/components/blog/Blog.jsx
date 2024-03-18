import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./blog.css"
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"

const Blog = () => {
  return (
    <section id='blog'>
    <Container>
    <div className="blog_part">
        <h2>Our blog</h2>
    </div>
    <Row>
        <Col lg={4}>
        <div className="blog_item">
            <img src={one} alt="" />
            <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <h4>Read More <i class="fa-solid fa-arrow-right-long"></i></h4>

        </div>
        </Col>
        <Col lg={4}>
        <div className="blog_item">
            <img src={two} alt="" />
            <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <h4>Read More <i class="fa-solid fa-arrow-right-long"></i></h4>

        </div>
        </Col>
        <Col lg={4}>
        <div className="blog_item">
            <img src={three} alt="" />
            <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <h4>Read More <i class="fa-solid fa-arrow-right-long"></i></h4>

        </div>
        </Col>
    </Row>

    </Container>
</section>
  )
}

export default Blog
