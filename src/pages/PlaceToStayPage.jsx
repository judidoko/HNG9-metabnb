import React from "react";
import { Row, Col } from "react-bootstrap";
import placeToStayData from "../Assets/Data/placetostayData";
import PlaceToStay from "../components/placeToStay/PlaceToStay";

const PlaceToStayPage = () => {
  return (
    <>
      <section>
        <div className="houses_section">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="d-flex align-items-center gap-2 mb-5 mt-5">
                  <span className="d-flex align-item-center gap-2">
                    <i className="ri-sort-asc"></i> Sort By
                  </span>
                  <select>
                    <option>Select</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                  </select>
                </div>
              </Col>

              {placeToStayData.map((item) => (
                <PlaceToStay item={item} key={item.id} />
              ))}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceToStayPage;
