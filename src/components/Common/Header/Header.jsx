import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";
import logo from "../../../assets/images/header/logo.png";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  // sticky Header
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <header className="header-section">
      <Container>
        <Navbar
          expand="lg"
          className="p-0 d-flex justify-content-between align-items-center"
        >
          {/* Logo */}
          <Navbar.Brand className="ms-2">
            <NavLink to="/">
              <img src={logo} alt="logo" className="header-logo" />
            </NavLink>
          </Navbar.Brand>

          {/* Menu Button */}
          <div className="d-lg-none">
            <button
              className="border-0 bg-transparent d-flex align-items-center justify-content-center m-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i
                className={
                  open
                    ? "bi bi-x-lg text-black fs-1"
                    : "bi bi-list text-black fs-1"
                }
              ></i>
            </button>
          </div>


          {/* Menu */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            show={open}
          >
            <Offcanvas.Header>
              <h1 className="logo">
                <img src={logo} alt="logo" className="header-logo" />
              </h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 text-dark">
                <Nav>
                  <NavLink className="nav-link" to="/">
                    Welcome
                  </NavLink>
                  <NavLink className="nav-link" to="/plan">
                    Plan{" "}
                  </NavLink>
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                  <NavDropdown
                    title="Destinations"
                    id="offcanvasNavbarDropdown-expand-lg"
                  >
                    <NavLink className="nav-link text-dark" to="/">
                      {" "}
                      Spain
                    </NavLink>
                    <NavLink className="nav-link text-dark" to="/">
                      {" "}
                      Turkey
                    </NavLink>
                    <NavLink className="nav-link text-dark" to="/">
                      {" "}
                      Italy
                    </NavLink>
                    <NavLink className="nav-link text-dark" to="/">
                      {" "}
                      France
                    </NavLink>
                  </NavDropdown>
                  <NavLink className="nav-link" to="/help">
                    {" "}
                    Help Centre
                  </NavLink>{" "}
                  {/* "GALLERY" */}
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>{" "}
                  {/* Contact */}
                </Nav>
              </Nav>
              <div className="ms-md-4 ms-2 d-flex align-items-center flex-wrap gap-2 mt-3 mt-md-0">
                <button
                  className="btn btn-danger fw-semibold px-4 py-2 mx-2"
                  style={{
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    const element = document.getElementById("form-check-input");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Book Now
                </button>
                <Button
                  className="btn btn-light text-black fw-semibold px-4 py-2"
                  style={{
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                  }}
                  onClick={handleShowModal}
                >
                  Sign In
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Action Buttons */}
        </Navbar>
      </Container>

      {/* Sign In Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-4">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold fs-5">E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="mb-3 p-3 rounded-3 border border-secondary shadow-sm"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold fs-5">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                className="mb-3 p-3 rounded-3 border border-secondary shadow-sm"
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check type="checkbox" className="me-2" />
              <Form.Label className="m-0 fs-6">
                I agree to receive newsletters and personalized marketing
              </Form.Label>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 p-3 fw-bold rounded-3"
              style={{ backgroundColor: "#a11b2d", border: "none" }}
            >
              Sign In
            </Button>

            <Button
              variant="light"
              onClick={handleCloseModal}
              className="w-100 mt-3 p-3 fw-bold rounded-3 text-dark border border-secondary"
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
