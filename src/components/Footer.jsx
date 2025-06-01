import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="fw-bolder fs-4"
              >
                <i class="fa-solid fa-cake-candles"></i> Foodie Crush
              </Link>
              <p className="fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                itaque consectetur reprehenderit modi.
              </p>
            </div>
            <div className="col d-flex flex-column">
              <h4>Links</h4>
              <Link to="/" style={{ textDecoration: "none" }}>
                Landing
              </Link>
            </div>
            <div className="col">
              <h4>Guides</h4>
              <p>React</p>
              <p>Bootstrap</p>
              <p>Routing</p>
            </div>
            <div className="col">
              <h4>Contact Us</h4>
              <div className="d-flex">
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="form-control me-2"
                />
                <button className="btn bg-danger">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
