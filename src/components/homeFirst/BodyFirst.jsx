import React from "react";
import "./BodyFirst.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import HomeBg from "../../Assets/imgs/home-bg.JPG";

const BodyFirst = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="header_para">
              <h3>
                Reat a <span>Place</span> away from <span>Home</span> in the
                <span> Metaverse</span>
              </h3>
              <p>
                We provide you access to luxury and affordable houses in the
                metaverse, get a a chance to turn your imagination to reality at
                your comfort Zone.
              </p>
              <InputGroup className="search_input mb-3">
                <Form.Control
                  placeholder="Search for location"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button className="btn_search" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="home_bg">
              <img src={HomeBg} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BodyFirst;
