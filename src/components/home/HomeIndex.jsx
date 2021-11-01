import React from "react";
import MainPageCarousel from "../home/MainPageCarousel";
import NavbarHeader from "../home/NavbarHeader";
import HeadingInfo from "../home/HeadingInfo";
import HRLine from "../home/HRLine";
import BRLine from "../home/BRLine";
import HomePageExplanation from "../home/HomePageExplanation";
import MetaTags from "react-meta-tags";

const HomeIndex = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Home</title>
        <meta
          name="description"
          content="trade, sales, abroad, managing trade, sales trade, trading | We give incredible consideration to give the quality providing and showcasing administrations for our clients. You can discover itemized data about our administrations on our page | best quality partnerships | products | incredible consideration | market analysis | trade, sales, abroad, managing trade, sales trade, product, legume, dried-fruits, automation, automation system, 
          parquet, sofa, parquet sofa, smart, smart system, fruits, smart systems, textile, furniture, architecture, furniture and architecture, furniture architecture, automation
          armoured, armoured vehicle, armoured car rent, rent a armoured car, rent a armoured vehicle, mining, maritime, industry, fabric, fabric and rope, rope, home textile, home,
          olive, oil, olive oil, rice, automative, barley, wheat, quality trade, safe, barley and wheat, trading, abroad, cheap trading, cheap trade"
        />
        <meta property="og:title" content="Home" />
        <meta property="og:image" content="public/src/tradeIstLogo.jpg" />
        <meta property="og:image" content="public/src/parke.jpeg" />
        <meta property="og:image" content="public/src/bakliyat.jpeg" />
        <meta property="og:image" content="public/src/otomasyon.jpeg" />
        <meta property="og:image" content="public/src/kumas.jpeg" />
        <meta property="og:image" content="public/src/smartsystem.jpeg" />
      </MetaTags>
      <MainPageCarousel></MainPageCarousel>
      <BRLine></BRLine>
      <BRLine></BRLine>
      <HeadingInfo></HeadingInfo>
      <BRLine></BRLine>
      <HRLine></HRLine>
      <HomePageExplanation></HomePageExplanation>
    </React.Fragment>
  );
};
export default HomeIndex;
