import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import About from "./About";
import Project from "./Projects";
import Resume from "./Resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/projects">
        <Project />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
  );
};

export default Main;
