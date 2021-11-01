import React from "react";
import "../../App.css";
import BackKey from "../contact/BackKey";
import HRLineTwo from "../home/HRLineTwo";
import FeaturetteRightOne from "../home/FeaturetteRightOne";
import FeaturetteRightTwo from "../home/FeaturetteRightTwo";
import FeaturetteRightThree from "../home/FeaturetteRightThree";
import FeaturetteRightFifth from "../home/FeaturetteRightFifth";
import FeaturetteRightSixth from "../home/FeaturetteRightSixth";
import BRLine from "../home/BRLine";
import MetaTags from 'react-meta-tags';

const AboutIndex = () => {
  return (
    <React.Fragment>
       <MetaTags>
        <title>Why Us</title>
        <meta name="description" content="trade, sales, abroad | benefits | need | connected worldwide | Trade Markets | electronics | medical | food firms | Qulified Quality | Safe Trade | Global Reach | Supply Service | Trade-ist | Analysis and Determining Appropriate Offer | Company Travels | Informing Research Result | Travels | Business Process for Supply Service Request Notification | Business | Process | Supply | Supplying | Technologhy | Benefits | trade, sales, abroad, managing trade, sales trade, product, legume, dried-fruits, automation, automation system, 
        parquet, sofa, parquet sofa, smart, smart system, fruits, smart systems, textile, furniture, architecture, furniture and architecture, furniture architecture, automation
        armoured, armoured vehicle, armoured car rent, rent a armoured car, rent a armoured vehicle, mining, maritime, industry, fabric, fabric and rope, rope, home textile, home,
        olive, oil, olive oil, rice, automative, barley, wheat, quality trade, safe, barley and wheat, trading, abroad, cheap trading, cheap trade" />
        <meta property="og:title" content="Why Us" />
        <meta property="og:image" content="public/src/benefits.jpeg" />
        <meta property="og:image" content="public/src/need.jpeg" />
        <meta property="og:image" content="public/src/connectedworldwide.jpeg" />
      </MetaTags>
      <BackKey></BackKey>
      <div className="about-index">
        <div className="about-index-container">
          <FeaturetteRightOne></FeaturetteRightOne>
          <FeaturetteRightTwo></FeaturetteRightTwo>
          <BRLine></BRLine>
          <FeaturetteRightThree></FeaturetteRightThree>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutIndex;
