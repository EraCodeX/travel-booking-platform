import React from "react";
import "./HelpCentre.css";
import { helpItems } from "../../utils/data";
const HelpCentre = () => {
  return (
    <div className="container py-5 my-5">
   <div className="row align-items-center mt-5 py-5">
  <div className="col-md-6">
    <h2 className="mb-0 display-5 fw-bold">Help Centre</h2>
  </div>
  <div className="col-md-6 text-md-end mt-3 mt-md-0">
  <div className="input-group">
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
</div>
      <div className="row">
        {helpItems.map((item, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100 d-flex flex-row align-items-center p-3">
              <div className="icon-circle me-3 text-primary">
                <i className={`bi ${item.icon} fs-4`}></i>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCentre;