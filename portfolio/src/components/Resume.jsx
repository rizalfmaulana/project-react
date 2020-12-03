import React from "react";
import { Cell, Grid } from "react-mdl";
import Poto from "../rizal.png";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skills";

const Resume = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img src={Poto} alt="rizal" style={{ height: "200px" }} />
          </div>
          <h2 style={{ paddingTop: "2em" }}>Rizal Fachrudin Maulana</h2>
          <h4 style={{ color: "grey" }}>Programmer</h4>
          <hr styl={{ border: "3px solid #833fb2", width: "50%" }} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <hr styl={{ border: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>Griya Bandung Indah Blok D7 No 17</p>
          <h5>Phone</h5>
          <p>+6281214684508</p>
          <h5>Email</h5>
          <p>rizalfmaulana@gmail.com</p>
          <hr styl={{ border: "3px solid #833fb2", width: "50%" }} />
        </Cell>
        <Cell col={8} className="resume-right">
          <h2>Education</h2>
          <Education
            startYear="2014"
            endYear="2018"
            schoolName="Telkom University"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,"
          />
          <Education
            startYear="2020"
            endYear="2020"
            schoolName="Digitalent"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>experience</h2>
          <Experience
            startYear="2018"
            endYear="2019"
            jobName="Multipolar TEchnology"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skill skill="HTML" progress="85" />
          <Skill skill="CSS" progress="80" />
          <Skill skill="React" progress="75" />
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
