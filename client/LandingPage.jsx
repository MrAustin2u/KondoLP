import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const fullPageOptions = {
  autoScrolling: true,
  scrollingSpeed: 1000,
  anchors: ["section1", "section2", "section3"],
  lockAnchors: true,
  navigation: true,
  //   navigationPosition: "right",
  navigationTooltips: ["Kondo", "Installation", "About Us"],
  scrollOverFlow: true,
};

const LandingPage = (fullpageProps) => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper {...fullPageOptions}>
          <div className="section" id="section1">
            <h1 className="main-title">KONDO</h1>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Installation
            </button>
          </div>
          <div className="section" id="section2">
            <h1 className="install">Installation</h1>
            <a href="/kondo">Read More</a>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              About Us
            </button>
          </div>
          <div className="section" id="section3">
            <h1 className="aboutUs">About Us</h1>
            <button onClick={() => fullpageApi.moveSectionUp()}>
              Installation
            </button>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default LandingPage;
