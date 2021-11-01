import React from 'react';
import '../../App.css';
import {Image} from 'react-bootstrap';
import TradeIst from '../../images/companyinfo.png';

const FeaturetteRightFour = () =>
{
  return(
      <React.Fragment>
        <div className="feature-property">
            <div className="feature-propery-child">
            <text>Delivery Terms Used in Trade-ist.</text>
            </div>
            <div className="feature-propery-child-two">
            <Image src={TradeIst} fluid />
            </div>
        </div>
      </React.Fragment>
  )
}
export default FeaturetteRightFour;
