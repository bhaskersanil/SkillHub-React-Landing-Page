function Card (props) {
  <div className="card">
    <img src={props.cardImg} alt="icon" />
    <div className="cardText">
      <h2>{props.cardHeading}</h2>
      <p>Non-disclosure agreement seed round seed money accelerator influencer</p>
    </div>
  </div>;
};

function Cards(){
  <div className="cardContainer">
    <Card
      cardImg="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/624ff367314de669976dd7b9_Icon%20(2).png"
      cardHeading="Select a course"
    />
    <Card
      cardImg="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/624ff5ebfdbd8c3b485814b1_Icon%20(3).png"
      cardHeading="Fill it up & give payment"
    />
    <Card
      cardImg="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/624ff5eb944ab89588523acf_Icon%20(4).png"
      cardHeading="Fill it up & give payment"
    />
  </div>;
};

function Resource() {
  return (
    <div className="resources">
      <div className="resourceText">
        <h2>How it Works</h2>
        <p>
          Non-disclosure agreement seed round seed money accelerator influencer.
        </p>
      </div>
      <div className="resourceContent">
        <Cards />
        <img
          src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/624ff628a862c051c49e3390_Image%20(27).png"
          alt="Resources Image"
        />
      </div>
    </div>
  );
}

export default Resource;
