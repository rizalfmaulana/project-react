import React from "react";
import {
  Card,
  CardActions,
  CardMenu,
  CardText,
  CardTitle,
  IconButton,
  Button,
} from "react-mdl";

const Projects = () => {
  return (
    <div className="project-grid">
      <Card shadow={5} style={{ width: "450px", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(data:image/jpeg;base64,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)",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          Note
        </CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      <Card shadow={5} style={{ width: "450px", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfTgxY0u_043mTJFOazj1PjaNPafBJ4HZYA&usqp=CAU)",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          To Do List
        </CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </div>
  );
};

export default Projects;
