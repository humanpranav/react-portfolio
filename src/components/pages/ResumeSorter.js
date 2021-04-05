import React from "react";
import "../resumeSorter.css";
import Candidates from "../Candidates";

const myStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  display: "block",
  width: "100%",

  height: "100%",

  transition: "all 0.2s linear",
};

const ResumeSorter = () => {
  return (
    <div>
      <p className="comp-intro-2">
        Your job is hard! Keeping track of all of the resumes can be a pain!
        This Component is here to help! Sort by expertise to find the best
        candidate!
      </p>
      <div className="hope">
        <Candidates style={myStyle} />
      </div>
    </div>
  );
};

export default ResumeSorter;
