import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const addIcon = <FontAwesomeIcon icon={faMapMarker} />;
  const envIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phnIcon = <FontAwesomeIcon icon={faPhone} />;
  return (
    <>
      <footer className="foot">
        <Container>
          <Row>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>About us</h2>
              </div>
              <div className="foot-detail-1">
                <p>
                  Health care is the improvement of health via the prevention,
                  diagnosis, treatment, or cure of disease, illness, injury,
                  other physical and mental impairments in people. Health care
                  is delivered by health professionals and allied health fields.
                </p>
              </div>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>Quick links</h2>
              </div>
              <Navbar variant="light" className="responsive-fix">
                <Nav className="d-block foot-nav-menu">
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/specialist">
                    Specialists
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>Our services</h2>
              </div>
              <ul className="foot-detail-3">
                <li>Dental Care</li>
                <li>Darmatology Solution</li>
                <li>Pathology Lab</li>
                <li>Neurology Solution</li>
                <li>Urology Solution</li>
              </ul>
            </Col>
            <Col
              md={3}
              sm={6}
              xs={12}
              className="text-start column-gap-responsive"
            >
              <div className="foot-title">
                <h2>Contact info</h2>
              </div>
              <ul className="foot-detail-4">
                <li>{addIcon} HealthCare, Dhaka, Bangladesh</li>
                <li>{envIcon} info@healthcare.com</li>
                <li>{phnIcon} +8801234567890</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
