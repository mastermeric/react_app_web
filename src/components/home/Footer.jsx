import React from "react";
import '../../App.css';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="copyright">&copy; {new Date().getFullYear()} Powered By EK</div>
        <div className="back-to-home"><a href="/">Back to home</a></div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
