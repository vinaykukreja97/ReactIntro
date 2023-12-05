import React from "react";
import  ReactDOM  from "react-dom";

const parent = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child" },
    [React.createElement("h1", {  }, "Im an H1 Tag"), React.createElement("h1", {  }, "Im an H1 Tag - sibling")]
  ),
  React.createElement("div", { id: "child" },
    [React.createElement("h2", {  }, "Im an H2 Tag"), React.createElement("h2", {  }, "Im an H2 Tag - sibling")]
  ),

]
);

const heading = React.createElement(
      "h1",
      {
        class: "heading"
      },
      "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);