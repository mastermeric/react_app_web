import React from "react";
import { Link } from "react-router-dom";
import NotFounds from "../../images/notfound.jpeg";
// import {
//   ReasonPhrases,
//   StatusCodes,
//   getReasonPhrase,
//   getStatusCode,
// } from "http-status-codes";

function NotFound() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://localhost:3000/", true);

//   xhr.onloadend = function () {
//     if (xhr.status == 404) throw new Error("http://localhost:3000/" + " replied 404");
//   };
  return (
    <div className="notfound-container">
      <div className="not-found">
        <div className="not-found-detail">
          <img src={NotFounds} />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
