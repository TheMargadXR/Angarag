// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import React from "react";
import Hero from "./Pages/Hero";
import List from "./Pages/Lists/List";
import List1 from "./Pages/Lists/List1";
import List2 from "./Pages/Lists/List2";
import Footer from "./Pages/Footer";
import Label from "./Pages/Label";
import Contact from "./Pages/Contacts";
function App() {
  return (
    <>
      <Hero />
      <Label />
      <br></br>
      <List />
      <br />
      <List1 />
      <br />
      <List2 />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
