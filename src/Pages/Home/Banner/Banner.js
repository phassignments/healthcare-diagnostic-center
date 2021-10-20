import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import slideOne from "../../../Images/carousel/slide-01.jpg";
import slideTwo from "../../../Images/carousel/slide-02.jpg";
import slideThree from "../../../Images/carousel/slide-03.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={slideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Quality Services</h3>
            <p>
              Quality Health Services is all about providing the best services
              to adults, seniors, children and disabled. We are a dependable and
              trusted agency of choice.
            </p>
            <Link className="slide-btn" to="/contact">
              Contact us
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={slideTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Award Winning Health System</h3>
            <p>
              It is one of the award-winning health system with nearly 5k
              employees dedicated to providing the highest quality service.
            </p>
            <Link className="slide-btn" to="/contact">
              Contact us
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={slideThree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Driving Innovation In Medtech</h3>
            <p>
              The focus is on patient centric. The coverage includes digital
              transformation of the medtech, AI in surgical interventions.
            </p>
            <Link className="slide-btn" to="/contact">
              Contact us
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
