import React from "react";
import { Cell, Grid } from "react-mdl";

const About = () => {
  function Certification(props) {
    return (
      <>
        <p style={{ width: "75%", margin: "auto" }}>{props.year}</p>
        <p style={{ width: "75%", margin: "auto" }}>{props.desc}</p>
        <p style={{ width: "75%", margin: "auto" }}>{props.title}</p>
      </>
    );
  }
  return (
    <div className="about-body">
      <Grid className="about-grid">
        <Cell col={12}>
          <h2>About Me</h2>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            I am a highly dedicated person who likes to learning new things and
            experiencing new challenges. I am experienced in networking. For the
            last two years, I learn about networking Cisco, HTML, Javascript,
            CSS, React Js. In organizational matters, I have experiences as an
            event coordinator of Research Biomedical Engineering, and also as
            staff of IT in my previous company.
          </p>
          <hr
            style={{
              borderTop: "3px solid grey",
              margin: "auto",
              width: "50%",
            }}
          />
          <h2>Organization</h2>
          <p style={{ width: "75%", margin: "auto" }}>2016 - 2017</p>
          <p style={{ width: "75%", margin: "auto" }}>
            Assistant Coordinator of Research at
          </p>
          <p style={{ width: "75%", margin: "auto" }}>
            Biomedical Engineering LABORATORY
          </p>
          <hr
            style={{
              borderTop: "3px solid grey",
              margin: "auto",
              width: "50%",
            }}
          />
          <h2>Certification</h2>
          <Certification
            year="2020"
            desc="Web Front End Developer Menggunakan React Js"
            title="SANBERCODE"
          />
          <hr
            style={{
              borderTop: "3px solid grey",
              margin: "auto",
              width: "20%",
            }}
          />
          <Certification
            year="2020"
            desc="Belajar Dasar Pemrograman Web"
            title="DICODING"
          />
          <hr
            style={{
              borderTop: "3px solid grey",
              margin: "auto",
              width: "20%",
            }}
          />
          <Certification
            year="2019"
            desc="Cisco Certified Network Associate Routing and switching (ECC90813342898) (CCNA)"
            title="CISCO"
          />
          <hr
            style={{
              borderTop: "3px solid grey",
              margin: "auto",
              width: "20%",
            }}
          />
          <Certification
            year="2017"
            desc="Certified Secure Computer User v2 (ECC90813342898)"
            title="EC-COUNCIL"
          />
        </Cell>
      </Grid>
    </div>
  );
};

export default About;
