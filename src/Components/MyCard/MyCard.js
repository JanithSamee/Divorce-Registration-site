import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myCard-styles.css";
import icon from "../../assets/icon1.svg";

function MyCard({ number, title, body, imagePath }) {
  
  return (
    <>
      <div className="card-container">
        <div className="number">{number}</div>
        <div className="band">{title}</div>
        <div className="card-body">{body}</div>
        <div className="image">
          <img src={imagePath} alt="image" />
        </div>
      </div>
    </>
  );
}

export default MyCard;
