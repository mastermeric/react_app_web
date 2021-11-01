import React from 'react';
import '../../App.css';
import { Image } from 'react-bootstrap'

const FeaturetteLeft = () =>
{
  return(
      <React.Fragment>
        <div className="feature-property">
             <div className="feature-propery-child-two">
            <Image src={imageUrl} fluid />
            </div>
            <div className="feature-propery-child">
            <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia iure ipsa earum modi, optio repellendus! Dignissimos praesentium optio molestiae aliquam? </text>
            </div>
        </div>
      </React.Fragment>
  )
}
const imageUrl = "https://www.playaloves.me/wp-content/uploads/2016/03/css-logo.png";
export default FeaturetteLeft;
