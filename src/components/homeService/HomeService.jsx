import React from "react";
import "./HomeService.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeBg2 from "../../Assets/imgs/service-bg.JPG";

const HomeService = () => {
  return (
    <>
      <div className="container">
        <Row className="service-row">
          <Col lg="6" md="12" sm="12">
            <div className="service">
              <h3>Metabnb NFTs</h3>
              <p>
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>

              <Link to="#">Learn More</Link>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="service_bg">
              <img src={HomeBg2} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeService;
