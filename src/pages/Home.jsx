import React from "react";
import { Col, Row } from "react-bootstrap";
import houseData from "../Assets/Data/houseData";
import Companies from "../components/companies/Companies";
import BodyFirst from "../components/homeFirst/BodyFirst";
import HomeService from "../components/homeService/HomeService";
import Houses from "../components/houses/Houses";

const Home = () => {
  return (
    <>
      {/* ALl CSS are in App.scc */}
      <section>
        <div className="first_section">
          <BodyFirst />
        </div>
      </section>
      {/* Companies Section */}

      <section>
        <div className="companies">
          <Companies />
        </div>
      </section>
      {/* Houses Section */}
      <section>
        <div className="houses_section">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="houses_header text-center m-4">
                  <h3>Inspiration for your next adventure</h3>
                </div>
              </Col>
              {houseData.slice(0, 8).map((item, index) => (
                <Houses item={item} key={index} />
              ))}
            </Row>
          </div>
        </div>
      </section>
      {/* service Section */}
      <section>
        <div className="service_section d-flex aligns-items-center justify-content-center">
          <HomeService />
        </div>
      </section>
    </>
  );
};

export default Home;
