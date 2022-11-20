import React from "react";

function About(props) {
  return (
    <main>
      <div className="imgContainer">
        <img
          src={props.imgLink}
          alt="Image"
        />
      </div>
      <div className="textContainer aboutText">
        <h1>
          {props.bigText} 
        </h1>
        <p>
          {props.para1}
        </p>
        <p>
          {props.para2}
        </p>
        <button className="btn">{props.btn}</button>
      </div>
    </main>
  );
}

export default About;