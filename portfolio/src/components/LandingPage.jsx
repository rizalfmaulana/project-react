import React from "react";
import { Cell, Grid } from "react-mdl";
import Poto from "../rizal.png";

const LandingPage = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img className="avatar" src={Poto} alt="nama" />
          <div className="banner-text">
            <h1>Front-End Developer</h1>
            <hr />
            <p>HTML | CSS | JavaScript | React Jss</p>
            <div className="social-link">
              <a
                href="https://uigradients.com/#MoonlitAsteroid"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://uigradients.com/#MoonlitAsteroid"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://uigradients.com/#MoonlitAsteroid"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default LandingPage;
