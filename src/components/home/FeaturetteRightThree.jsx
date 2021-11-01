import React from 'react';
import '../../App.css';
import {Image} from 'react-bootstrap';
import TradeIst from '../../images/trade.png';

const FeaturetteRightThree = () =>
{
  return(
      <React.Fragment>
        <div className="feature-property">
            <div className="feature-propery-child">
            </div>
            <div className="feature-propery-child-two">
            <Image src={TradeIst} fluid />
            </div>
        </div>
        <div className="feature-property-response-two-three">
        We will strive to find highest quality and best possible price.
Informing Research Results: We will inform the all research results including price offers and technical specifications to you as soon as possible. We will categorize the offers according to some features for you to make the analysis clearly.
Analysis and Determining Appropriate Offer(s): This stage will be performed essentially by you according to your criteria. But we will be ready to give information about manufacturers, products, or sectors. You will inform the analysis results to us. According to feedback which you will give, the process of business will be shaped. If you have an opinion that offers and data on your hands are insufficient, we will research the else manufacturers to get new offers or we will discuss with current manufacturers on the existing offers. If you chose one or more appropriate offers, we will make visiting to selected manufacturers with you.
      </div>
      </React.Fragment>
  )
}
  
export default FeaturetteRightThree;
