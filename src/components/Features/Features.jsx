import React from "react";
import "../Features/features.css";

import feature1 from "../../assets/images/feature/beach-umbrella.png";
import feature2 from "../../assets/images/feature/deal.png";
import feature3 from "../../assets/images/feature/location.png";
import feature4 from "../../assets/images/feature/medal.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Uncover New Adventures",
      des: "With thousands of destinations and experiences, there's always something new to explore.",
    },
    {
      id: 1,
      image: feature2,
      title: "Unbeatable Offers",
      des: "Enjoy premium experiences at discounted rates and earn rewards for future bookings.",
    },
    {
      id: 2,
      image: feature3,
      title: "Seamless Travel Planning",
      des: "Book instantly, skip the hassle, and enjoy flexible cancellations for a stress-free trip.",
    },

    {
      id: 3,
      image: feature4,
      title: "Your Trusted Travel Partner",
      des: "Access reviews, get 24/7 support, and travel with confidence knowing we're here for you.",
    },
  ];

  return (
    <>
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <Card key={inx}>
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                        alt={feature.title}
                      />
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.des}</Card.Text>
                    </Card>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
