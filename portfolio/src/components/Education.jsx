import React from "react";
import { Cell, Grid } from "react-mdl";

const Education = (props) => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <p>
            {props.startYear} - {props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{props.schoolName}</h4>
          <p>{props.description}</p>
        </Cell>
      </Grid>
    </div>
  );
};
export default Education;
