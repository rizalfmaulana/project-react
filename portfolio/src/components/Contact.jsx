import React from "react";
import { Cell, Grid, List, ListItem, ListItemContent } from "react-mdl";
import potos from "../rizal.png";

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Rizal Fachrudin Maulana</h2>
          <img src={potos} alt="rizal" style={{ height: "250px" }} />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{ fontSize: "30px" }}>
                  <i className="fas fa-phone"></i>+6281214684508
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: "30px" }}>
                  <i className="fas fa-envelope"></i>rizalfmaulana@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: "30px" }}>
                  <i className="fab fa-linkedin"></i>rizalfmaulana
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
