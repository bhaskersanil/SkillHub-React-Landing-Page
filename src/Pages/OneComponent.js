import React from "react";

function OneComponent(props) {
  return (
    <main>
      <div className="textContainer">
        <h2>{props.mediumText}</h2>
        <h1>{props.bigText}</h1>
        <p>
          {props.para}
        </p>
        <input type="text" placeholder= "Search course title"/>
        <button className="btn">{props.btn}</button>
      </div>
      <div className="imgContainer mainImg">
        <img
          src={props.imgLink}
          alt="Image"
        />
      </div>
    </main>
  );
}

export default OneComponent;
