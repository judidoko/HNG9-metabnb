import React from "react";
import "./Companies.css";
import { Row, Col } from "react-bootstrap";
import Company1 from "../../Assets/imgs/mbtoken.JPG";
import Company2 from "../../Assets/imgs/metamask.JPG";
import Company3 from "../../Assets/imgs/opensea.JPG";

const Companies = () => {
  return (
    <>
      <div className="companies mt-4 mb-4 w-100">
        <Row className="d-flex align-items-center justify-content-center p-0 m-0">
          <Col lg="4" md="4" sm="12">
            <img src={Company1} alt="" />
          </Col>
          <Col lg="4" md="4" sm="12">
            <img src={Company2} alt="" />
          </Col>
          <Col lg="4" md="4" sm="12">
            <img src={Company3} alt="" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Companies;
