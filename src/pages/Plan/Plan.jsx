import React from "react";
import "./Plan.css";
function Plan() {
  return (
    <div className="container py-5 m-5">
      <h2 className="m-5 py-5 display-5 fw-bold">
        Explore Your Travel Opportunities
      </h2>
      <div className="row mb-5">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3">
            <div className="icon-circle me-3">
              <i className="bi bi-airplane-engines"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Select Flight</h5>
              <p className="card-text">
                Find flights quickly from your departure to your dream
                destination.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3">
            <div className="icon-circle me-3">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Destination</h5>
              <p className="card-text">
                Choose your favorite city for your holiday.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3">
            <div className="icon-circle me-3">
              <i className="bi bi-search"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Fare Finder</h5>
              <p className="card-text">
                Find the cheapest available fare for your destination quickly.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3">
            <div className="icon-circle me-3">
              <i className="bi bi-map"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Travel Planning Map</h5>
              <p className="card-text">
                Check out our map and explore your future trips.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="m-5 p-5 display-5 fw-bold">Top Flights</h2>
      <div className="row mb-5">
        <div className="col-md-3">
          <h5 className="card-title my-2">Western Europe</h5>
          <ul className="list-unstyled mx-2">
            <li>Lisbon</li>
            <li>London</li>
            <li>Madrid</li>
            <li>Milan</li>
            <li>Oslo</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="card-title my-2">Central and Eastern Europe</h5>
          <ul className="list-unstyled mx-2 ">
            <li>Bucharest</li>
            <li>Budapest</li>
            <li>Krakow</li>
            <li>Timisoara</li>
            <li>Vienna</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="card-title my-2">Mediterranean Region</h5>
          <ul className="list-unstyled mx-2 ">
            <li>Athens</li>
            <li>Malaga</li>
            <li>Naples</li>
            <li>Izmir</li>
            <li>Tenerife</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="card-title my-2">The Middle East</h5>
          <ul className="list-unstyled mx-2">
            <li>Alexandria</li>
            <li>Amman</li>
            <li>Muscat</li>
            <li>Tel Aviv</li>
          </ul>
        </div>
      </div>

      <h2 className="m-5 py-5 display-5 fw-bold">
        Organize Your Whole Holiday Easily
      </h2>

      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="icon-circle mb-3">
                <i className="bi bi-building"></i>
              </div>
              <h5 className="card-title">Hotels</h5>
              <p className="card-text">
                Book your hotel easily and quickly at your destination.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="icon-circle mb-3">
                <i className="bi bi-car-front"></i>
              </div>
              <h5 className="card-title">Car Rentals</h5>
              <p className="card-text">
                Find the best car rental deals at your destination.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="icon-circle mb-3">
                <i className="bi bi-bus-front"></i>
              </div>
              <h5 className="card-title">Airport Transfer</h5>
              <p className="card-text">
                Book transport from the airport to your hotel easily.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="icon-circle mb-3">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h5 className="card-title">Airport Parking</h5>
              <p className="card-text">
                Reserve airport parking fast and easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
