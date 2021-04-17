import React, { Component } from "react";
import ReactDOM from "react-dom";
const render = ReactDOM.render;

const node = document.getElementById("root");
const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello World!",
    React.createElement(
      "a",
      { href: "https://www.google.ru/" },
      React.createElement("h1", {}, "React In Action"),
      React.createElement("em", {}, "...and now it really is!")
    )
  )
);
render(root, node);
