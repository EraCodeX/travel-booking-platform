import React from "react";
import { Carousel } from "react-bootstrap";
import videoSrc1 from "../../assets/images/slider/video1.mp4";
import videoSrc from "../../assets/images/slider/video.mp4";
import "../Banner/banner.css";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          {/* Carousel */}
          <Carousel.Item>
            <video
              className="d-block w-100"
              autoPlay
              loop
              muted
              playsInline
              alt="First slide"
              style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "cover" }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                  Explore enchanting destinations and create unforgettable memories with us.
                  Your dream journey starts here!
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/*  Carousel */}
          <Carousel.Item>
            <video
              className="d-block w-100"
              autoPlay
              loop
              muted
              playsInline
              alt="Second slide"
              style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "cover" }}
            >
              <source src={videoSrc1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                  Explore enchanting destinations and create unforgettable memories with us.
                  Your dream journey starts here!
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;