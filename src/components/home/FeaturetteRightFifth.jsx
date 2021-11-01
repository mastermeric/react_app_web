import React from 'react';
import '../../App.css';
import {Image} from 'react-bootstrap';
import TradeIst from '../../images/delivery.png';

const FeaturetteRightFifth = () =>
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
      </React.Fragment>
  )
}
export default FeaturetteRightFifth;
