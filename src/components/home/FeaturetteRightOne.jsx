import React from "react";
import "../../App.css";
import { Image } from "react-bootstrap";

const FeaturetteRightOne = () => {
  return (
    <React.Fragment>
      <div className="feature-property">
        <div className="feature-propery-child">
          <text>
            <b>Safe Trade:</b>For safe and guaranteed trade with you. Like with
            all our customers.<br></br>
            <b>Global Reach:</b>
            <span> Brand new global trading platforms</span>
            <br></br>
            <span>
              Qulified Quality service for buyers and sellers. Let us take
              control of your reliable sourced and first-hand trade
            </span>
            <br></br>
            As the transformation of trade markets continues, Brokers are
            investing in new tradeings to maintain and grow their business.
            Mustafa Yılmaz, strategy Officer for Trade-ist Group, takes a closer
            look at the advancement of connectivity in emerging trade markets
            the ways electronics, medical, food firms can gain more efficient
            access to in our connected countries.<br></br>
          </text>
        </div>
        <div className="feature-propery-child-two">
          <Image
            src="https://forexshop24.com/wp-content/uploads/2020/02/why-us.png"
            fluid
          />
        </div>
      </div>
      <div className="feature-property-response">
        <b>Safe Trade:</b>For safe and guaranteed trade with you. Like with all
        our customers.<br></br>
        <b>Global Reach:</b>
        <span> Brand new global trading platforms</span>
        <br></br>
        <span>
          Qulified Quality service for buyers and sellers. Let us take control
          of your reliable sourced and first-hand trade
        </span>
        <br></br>
        As the transformation of trade markets continues, Brokers are investing
        in new tradeings to maintain and grow their business
      </div>
    </React.Fragment>
  );
};

export default FeaturetteRightOne;
