import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import placeToStayData from "../Assets/Data/placetostayData";
import PlaceToStay from "../components/placeToStay/PlaceToStay";
import { RiSoundModuleLine } from "react-icons/ri";

const PlaceToStayPage = () => {
  return (
    <>
      <section>
        <div className="houses_section">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className=" filters d-flex align-items-center justify-content-evenly gap-4 mb-5 mt-5">
                  <span>Resturant</span>
                  <span>Cottage</span>
                  <span>Castle</span>
                  <span>Fantest City</span>
                  <span>Beach</span>
                  <span>Caebins</span>
                  <span>Off-grid</span>
                  <span>Farm</span>
                  <Button>
                    Location <RiSoundModuleLine className="location_icon" />
                  </Button>
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
