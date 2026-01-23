import React, { useState } from "react";
import "./ContactPage.css";
import { contactCards } from "../../utils/data";
const ContactPage = () => {
  const [activeItem, setActiveItem] = useState("Help Centre");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="container mt-5 pt-4 contact-page">
      {/* Row 1 */}
      <div className="col-md-6 mx-auto text-center mt-5 py-5">
        <h2 className="fw-bold m-4">How can we help you?</h2>
        <div className="input-group justify-content-center">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Search..."
          />
          <span className="input-group-text p-3">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      {/* Right Content */}
      <div className="row mt-4 w-100">
        {/* Left Column */}
        <div className="col-md-4 mt-4">
          <h3 className="mb-4 text-start">Current flight status</h3>
          <ul className="list-group">
            {[
              "Help Centre",
              "Contact us",
              "Current flight status",
              "My WEX Account",
              "Booking information and services",
              "Booking modification",
              "Check-in and boarding",
              "Delay, Cancellation and Refund",
              "Damaged or lost bags and items",
              "Frequently Asked Questions",
            ].map((item) => (
              <li
                key={item}
                className={`list-group-item list-group-item-action ${
                  activeItem === item ? "active" : ""
                }`}
                onClick={() => handleItemClick(item)}
                style={{ cursor: "pointer" }}
              >
                <span>
                  <i className="bi bi-chevron-right me-2"></i>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cards */}
        <div className="col-md-8">
          <h3 className="mb-4 text-start f-bold fs-4">Contact us</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Card */}
            {contactCards.map((card, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm border-0 text-center">
                  <div className="d-flex justify-content-center mt-3">
                    <img
                      src={require(`../../assets/images/contact/${card.img}`)}
                      className="card-img-top contact-page-image"
                      alt={card.title}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold text-uppercase">{card.title}</h5>
                    <p className="flex-grow-1">{card.text}</p>
                    <button className="btn btn-danger mt-2">
                      {card.button}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/*Claim*/}
            <div className="text-muted small text-center m-4">
              Are you a claim management company, a lawyer or a law firm?{" "}
              <a href="/" className="text-decoration-none fw-semibold">
                Submit a claim here.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
