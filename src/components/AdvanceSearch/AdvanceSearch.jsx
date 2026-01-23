import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AdvanceSearch/search.css";
import { Container, Spinner, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tripType, setTripType] = useState("return");
  const [selectedService, setSelectedService] = useState("flights");
  const [searchResults, setSearchResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [driverAge, setDriverAge] = useState(30);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpTime, setPickUpTime] = useState("12:00");
  const [dropOffTime, setDropOffTime] = useState("12:30");
  const [loading, setLoading] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const selectedGuest = (value) => {
    setGuestCount(value);
    console.log("Guest", value);
  };
  const handleServiceChange = (service) => setSelectedService(service);
  const handleTripTypeChange = (type) => setTripType(type);

  const handleSearch = async () => {
    const origin = pickUpLocation?.value;
    const destination = dropOffLocation?.value;
    const departureDate = startDate.toISOString().split("T")[0];
    const returnDate =
      tripType === "return" ? endDate.toISOString().split("T")[0] : "";
    if (!origin || !destination || !departureDate) {
      alert("Please fill in Origin, Destination and Date");
      return;
    }
    setLoading(true);
    let url = `https://eratravel.site/backend/flights.php?origin=${origin}&destination=${destination}&departureDate=${departureDate}&adults=${guestCount}`;
    if (returnDate) {
      url += `&returnDate=${returnDate}`;
    }
    try {
      const response = await fetch(url);
      const text = await response.text();

      if (text.trim().startsWith("{") || text.trim().startsWith("[")) {
        const data = JSON.parse(text);
        setSearchResults(data.data || []);
      } else {
        console.error("Non-JSON response:", text);
      }
    } catch (err) {
      console.error("Error fetching flights", err);
    }
    setLoading(false);
    setSearchClicked(true);
  };
  return (
    <section className="box-search-advance">
      {loading && (
        <div className="spinner-overlay">
          <Spinner animation="border" className="spinner-border" />
        </div>
      )}
      <Container fluid>
        <Row>
          {/* Service Selection */}
          <Col md={6} xs={12}>
            <div className="box-search  shadow-sm p-4 rounded">
              <div className="search-type-toggle mb-4 d-flex flex-nowrap justify-content-between">
                {["flights", "hotels", "cars"].map((service) => (
                  <Col xs={4} sm={4} md={4} className="m-1" key={service}>
                    <Button
                      variant={
                        selectedService === service
                          ? "secondary"
                          : "outline-secondary"
                      }
                      className="btn-md w-100 d-flex align-items-center "
                      onClick={() => handleServiceChange(service)}
                    >
                      <i
                        className={`bi bi-${service === "flights"
                          ? "airplane-engines"
                          : service === "hotels"
                            ? "house-door"
                            : "car-front"
                          } me-2`}
                      ></i>
                      {service.charAt(0).toUpperCase() + service.slice(1)}
                    </Button>
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          {/* Show Return/One Way */}
          {selectedService === "flights" && (
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm p-4 rounded m-2">
                <div className="mb-4 d-flex flex-row gap-4 flex-wrap align-items-center">
                  {["oneway", "return"].map((type) => (
                    <label
                      className="form-check-label  d-flex align-items-center gap-2 fs-5 "
                      key={type}
                    >
                      <input
                        type="radio"
                        name="tripType"
                        value={type}
                        checked={tripType === type}
                        onChange={() => handleTripTypeChange(type)}
                        className="form-check-input"
                        style={{ width: "20px", height: "20px" }}
                        id="form-check-input"
                      />
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              {/* Search Filters */}
              <Col md={12} xs={12}>
                <div className="box-search shadow-sm">
                  <div className="item-search item-search-2 ">
                    <label className="item-search-label" id="form-check-input">Origin</label>
                    <CustomDropdown
                      onSelect={(val) => setPickUpLocation(val)}

                    />
                  </div>
                  <div className="item-search item-search-2">
                    <label className="item-search-label">Destination</label>
                    <CustomDropdown
                      onSelect={(val) => setDropOffLocation(val)}
                    />
                  </div>
                  <div className="item-search item-search-2">
                    <label className="item-search-label">Check in</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="dd, MMMM, yyyy"
                    />
                  </div>

                  {/* Check Out */}
                  {tripType === "return" && (
                    <div className="item-search item-search-2">
                      <label className="item-search-label">Check Out</label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd, MMMM, yyyy"
                      />
                    </div>
                  )}

                  <div className="item-search">
                    <CustomDropdown
                      label="Guests"
                      onSelect={(val) => setGuestCount(val)}
                      category="guest"
                      options={[1, 2, 3, 4, 5]}
                    />
                  </div>

                  <div className="item-search bd-none">
                    <Button
                      className="primaryBtn flex-even d-flex justify-content-center"
                      onClick={handleSearch}
                    >
                      <i className="bi bi-search me-2"></i> Search
                    </Button>
                  </div>
                </div>
              </Col>
            </Col>
          )}

          {/*  Hotels */}
          {selectedService === "hotels" && (
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm p-4 rounded m-2">
                <div className="item-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Where are you going?"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check-in</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd, MMMM, yyyy"
                    className="form-control"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check-out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd, MMMM, yyyy"
                    className="form-control"
                  />
                </div>
                <div className="item-search">
                  <CustomDropdown
                    label="Guests"
                    onSelect={selectedGuest}
                    category="guest"
                  />
                </div>
                <div className="item-search bd-none">
                  <Button
                    className="primaryBtn w-100 d-flex justify-content-center"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
            </Col>
          )}
          {selectedService === "cars" && (
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm p-4 rounded m-2">
                <div className="item-search">
                  <label className="form-label item-search-label">
                    Driver's Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={driverAge}
                    onChange={(e) => setDriverAge(e.target.value)}
                  />
                </div>

                <div className="item-search">
                  <label className="form-label item-search-label">
                    Pick-up Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter location"
                    value={pickUpLocation}
                    onChange={(e) => setPickUpLocation(e.target.value)}
                  />
                </div>

                <div className="item-search item-search-2">
                  <label className="item-search-label">Pick-up Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd, MMMM, yyyy"
                    className="form-control"
                  />
                </div>

                <div className="item-search item-search-2">
                  <label className="item-search-label">Pick-up Time</label>
                  <input
                    type="time"
                    className="form-control"
                    value={pickUpTime}
                    onChange={(e) => setPickUpTime(e.target.value)}
                  />
                </div>

                <div className="item-search">
                  <label className="form-label item-search-label">
                    Drop-off Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter location"
                    value={dropOffLocation}
                    onChange={(e) => setDropOffLocation(e.target.value)}
                  />
                </div>

                <div className="item-search item-search-2">
                  <label className="item-search-label">Drop-off Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd, MMMM, yyyy"
                    className="form-control"
                  />
                </div>

                <div className="item-search item-search-2">
                  <label className="item-search-label">Drop-off Time</label>
                  <input
                    type="time"
                    className="form-control"
                    value={dropOffTime}
                    onChange={(e) => setDropOffTime(e.target.value)}
                  />
                </div>

                <div className="item-search bd-none">
                  <Button
                    className="primaryBtn w-100 d-flex justify-content-center"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
            </Col>
          )}
          {/* Search Results */}
          {searchClicked && (
            <Col md={12} className="bg-light p-4 rounded shadow">
              <div className="search-results">
                <h4 className="mb-4 text-center text-danger fw-bold">
                  Flight Search Results
                </h4>
                <div className="result-list">
                  {searchResults.length > 0 ? (
                    searchResults.map((result, index) => {
                      const departureSegment =
                        result.itineraries[0]?.segments[0];
                      const returnSegment = result.itineraries[1]?.segments[0];
                      const price = result.price.total;

                      const flightNumber = `${departureSegment.carrierCode} ${departureSegment.number}`;
                      const departureTime = new Date(
                        departureSegment.departure.at
                      ).toLocaleString();
                      const arrivalTime = new Date(
                        departureSegment.arrival.at
                      ).toLocaleString();
                      const from = departureSegment.departure.iataCode;
                      const to = departureSegment.arrival.iataCode;

                      const returnInfo = returnSegment
                        ? {
                          flightNumber: `${returnSegment.carrierCode} ${returnSegment.number}`,
                          departureTime: new Date(
                            returnSegment.departure.at
                          ).toLocaleString(),
                          arrivalTime: new Date(
                            returnSegment.arrival.at
                          ).toLocaleString(),
                          from: returnSegment.departure.iataCode,
                          to: returnSegment.arrival.iataCode,
                        }
                        : null;

                      const totalPrice = (
                        parseFloat(price) * guestCount
                      ).toFixed(2);

                      return (
                        <div
                          key={index}
                          className="border p-3 mb-3 rounded shadow-sm bg-white"
                        >
                          <h5 className="mb-2 text-secondary text-center fs-5">
                            ✈️ {from} → {to}
                          </h5>
                          <div className="d-flex justify-content-between">
                            <div>
                              <strong>Departure:</strong> {departureTime}
                            </div>
                            <div>
                              <strong>Arrival:</strong> {arrivalTime}
                            </div>
                          </div>
                          <div className="mt-2 text-muted small">
                            Flight: <strong>{flightNumber}</strong>
                          </div>

                          {returnInfo && (
                            <div className="mt-4 p-3 border-top">
                              <p className="my-2 py-2">Return Flight: </p>
                              <h6 className="mb-2 text-secondary text-center fs-5">
                                ✈️ {returnInfo.from} → {returnInfo.to}
                              </h6>
                              <div className="d-flex justify-content-between text-muted small">
                                <div>
                                  <strong>Departure:</strong>{" "}
                                  {returnInfo.departureTime}
                                </div>
                                <div>
                                  <strong>Arrival:</strong>{" "}
                                  {returnInfo.arrivalTime}
                                </div>
                              </div>
                              <div className="mt-2 text-secondary small">
                                Flight:{" "}
                                <strong>{returnInfo.flightNumber}</strong>
                              </div>
                            </div>
                          )}

                          <div className="mt-3 text-danger">
                            <strong>Total Price:</strong> {totalPrice} € (
                            {guestCount} {guestCount > 1 ? "guests" : "guest"})
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center text-muted">
                      No results found. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default AdvanceSearch;
