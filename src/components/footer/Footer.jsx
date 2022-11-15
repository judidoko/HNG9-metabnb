import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import FooterLogo from "../../Assets/imgs/footer-logo.JPG";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="first_container">
      <div className="container pt-4">
        <Row>
          <Col lg="6" md="4" sm="12">
            <div className="logo footer_logo ">
              <Link to="/home" className="d-flex align-items-center">
                <img src={FooterLogo} alt="Our Logo" />
              </Link>
            </div>
            <div className=" social_link-icon d-flex align-items-center gap-5">
              <Link to="#" className="facebook">
                <FaFacebookF />
              </Link>
              <Link to="#" className="instagram">
                <FaInstagram />
              </Link>
              <Link to="#" className="twitter">
                <FaTwitter />
              </Link>
            </div>
            <div className="copy_right">
              <p className="Footer_description d-flex align-items-center  gap-1 mt-3">
                <BiCopyright />
                Copyright {year}, Metabnb
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="12">
            <div className=" footer_links d-grid align-items-center gap-2">
              <h5>Community</h5>
              <Link to="#">NFT</Link>
              <Link to="#">Tokens</Link>
              <Link to="#">Lanlords</Link>
              <Link to="#">Discord</Link>
            </div>
          </Col>

          <Col lg="2" md="2" sm="12">
            <div className=" footer_links d-grid align-items-center gap-2">
              <h5>Places</h5>
              <Link to="#">Castle</Link>
              <Link to="#">Farms</Link>
              <Link to="#">Beach</Link>
              <Link to="#">Learn more</Link>
            </div>
          </Col>

          <Col lg="2" md="3" sm="12">
            <div className="footer_links d-grid align-items-center gap-2">
              <h5>About Us</h5>
              <Link to="#">Road map</Link>
              <Link to="#">Creator</Link>
              <Link to="#">Career</Link>
              <Link to="#">Contact us</Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
