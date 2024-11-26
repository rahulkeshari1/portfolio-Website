import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import style from "./Styles/Header.css";
import Skills from "./components/Skills";

const App = () => {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(Header),
    React.createElement("main", null,
      React.createElement(About),
      React.createElement(Skills),
      React.createElement(Projects),
      React.createElement(Contact)
    ),
    React.createElement(Footer)
  );
};

export default App;
