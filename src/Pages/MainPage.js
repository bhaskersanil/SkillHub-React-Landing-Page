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



// import React from "react";

// function MainPage() {
//   return (
//     <main>
//       <div className="textContainer">
//         <h2>Grow yourself with us</h2>
//         <h1>Grow your skill & <br/> get world class <br/> job’s</h1>
//         <p>
//           Non-disclosure agreement seed round seed money accelerator influencer.
//           Growth hacking return nondis sure agreement seed round seed .
//         </p>
//         <input type="text" placeholder= "Search course title"/>
//         <button className="btn">Search</button>
//       </div>
//       <div className="imgContainer mainImg">
//         <img
//           src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/62877cc47182737223f8cab6_Student%2001-p-800.png"
//           alt="Image"
//         />
//       </div>
//     </main>
//   );
// }

// export default MainPage;
