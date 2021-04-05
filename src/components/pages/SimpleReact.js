import React from "react";
import Counter from "../counter";
import Useffect from "../Useffect";
import "../SimpleReact.css";

const SimpleReact = () => {
  return (
    <div>
      <h2 className="text">Here is a simple counter app using useState()</h2>
      <Counter />
      <h2 className="text">
        Here is a simple component using useEffect(). Generally we use useEffect
        for API calls but it can also be used to intialize an event listener
        such as listening for the window to resize. This is particularly
        important for responsive websites. Try it out! Resize your browser
        screen!
      </h2>
      <Useffect />
    </div>
  );
};

export default SimpleReact;
