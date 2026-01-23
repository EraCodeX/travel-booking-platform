import React, { useState } from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">About Us</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="">Who We Are</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="">Our Team</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="">Careers</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Discover</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="">Explore Tours</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="">Destinations</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="">Gallery</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/">Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/contact">Contact Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="">FAQs</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Contact Info </h4>

              <div className="d-flex align-items-center">
                <p className="pb-2"> Tirana, Tirana, Albania</p>
              </div>

              <div className="d-flex align-items-top my-2">
                <i className="bi bi-geo-alt me-3"></i>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="mailto:erahidaj@gmail.com"
                  className="d-block"
                >
                  erahidaj@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-top ">
                <i className="bi bi-telephone me-3"></i>
                <a
                  target="_blank"
                  href="tel:+355695248404"
                  rel="noreferrer noopener"
                  className="d-block"
                >
                  0695248404
                </a>
              </div>
            </Col>
          </Row>
          <Row className="py-2 bdr mt-3 color-red">
            <Col className="col copyright">
              <p className="text-light text-center">
                {" "}
                @ 2025. Era All rights reserved{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div
        id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;
