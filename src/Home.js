import React from "react";
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import Resource from "./Pages/Resource";

function Home() {
  return (
    <>
      <MainPage
        mediumText="Grow yourself with us"
        bigText="Grow your skill & get world class job’s"
        para="Non-disclosure agreement seed round seed money accelerator influencer.
           Growth hacking return nondis sure agreement seed round seed."
        btn="Search"
        imgLink="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/62877cc47182737223f8cab6_Student%2001-p-800.png"
      />
      
      <About
        imgLink="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/62877d601f23482651e98c9f_Student%2002-p-1080.png"
        bigText="Over 1M+ Students get’s job"
        para1="Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure."
        para2="Non-disclosure agreement seed round seed money accelerator influencer."
        btn="Explore More"
      />

      <Resource/>
    </>
  );
}

export default Home;
