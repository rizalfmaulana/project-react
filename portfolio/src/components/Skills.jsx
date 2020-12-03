import React from "react";
import { Cell, Grid, ProgressBar } from "react-mdl";

const Skill = (props) => {
  return (
    <Grid>
      <Cell col={12}>
        <div style={{ display: "flex" }}>
          {props.skill}
          <ProgressBar
            style={{ margin: "auto", width: "75%" }}
            progress={props.progress}
          />
        </div>
      </Cell>
    </Grid>
  );
};

export default Skill;
