import React from "react";
import { createRoot } from 'react-dom/client';

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" }, // Add unique key
      [
        React.createElement("h1", {key: "child3"}, "i am h1 tag"),
        React.createElement("h2", {key: "child4"}, "i am h2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" }, // Add unique key
      [
        React.createElement("h1", {key: "child5"}, "i am h1 tag"),
        React.createElement("h2", {key: "child6"}, "i am h2 tag")
      ]
    )
  ]
);

const root = createRoot(document.getElementById("root"));
root.render(parent);
