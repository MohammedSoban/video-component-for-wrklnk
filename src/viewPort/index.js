import React from "react";

import handleViewport from "react-in-viewport";

 import "./styles.css";

const Item = ({ inViewport, enterCount, leaveCount, innerRef }) => {
  const getStyle = () => {
    // Fade in only the first time we enter the viewport.
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: "opacity 0.75s ease-in-out" };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", opacity: "0" };
    } else {
      return {};
    }
  };

  return (
    <div className="content" style={getStyle()} ref={innerRef}>
      <h3>Hello Viewport!</h3>
      <p>{`Enter viewport: ${enterCount} times`}</p>
      <p>{`Leave viewport: ${leaveCount} times`}</p>
    </div>
  );
};

const ViewportItem = handleViewport(Item /** options: {}, config: {} **/);

function Appli() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ViewportItem
        onEnterViewport={() => console.log("[debug]: enter in viewport.")}
        onLeaveViewport={() => console.log("[debug]: leave viewport.")}
      />
    </div>
  );
}

export default Appli
