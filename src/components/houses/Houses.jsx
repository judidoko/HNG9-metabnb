import React from "react";
import "./Houses.css";
import { Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const Houses = (props) => {
  const { imgUrl, houseType, distance, amount, durability } = (props =
    props.item);

  return (
    <>
      <Col lg="3" md="6" sm="12" className="mb-3">
        <div className="house_item">
          <div className="house_img">
            <img src={imgUrl} alt="" className="w-100" />
          </div>

          <div className="house_item-content mt-4">
            <div className="house_item-info d-flex align-items-center gap-1 mt-2 mb-2">
              <span className="d-flex align-items-center gap-1">
                {houseType}
              </span>
              <span className="d-flex align-items-center gap-1">{amount}</span>
            </div>
            <div className="house_item-info d-flex align-items-center gap-1 mt-2 mb-2">
              <span className="d-flex align-items-center gap-1">
                {distance} away
              </span>

              <span className="d-flex align-items-center gap-1">
                {durability}
              </span>
            </div>
            <span className="d-flex align-items-center gap-1">
              <span style={{ color: "#A02279" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Houses;
