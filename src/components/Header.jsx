import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-light">
      <Navbar
        className="bg-secondary w-100 fixed-top shadow"
        style={{ zIndex: 1 }}
      >
        <Container>
          <Navbar.Brand className="text-light fw-bolder">
            <Link
              className="fw-bolder bold-text"
              style={{
                textDecoration: "none",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                fontWeight: "bolder",
              }}
              to={"/"}
            >
              <i className="fw-bolder fa-solid fa-cake-candles"></i> Foodie
              Crush
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
