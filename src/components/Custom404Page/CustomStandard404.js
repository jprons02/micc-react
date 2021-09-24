import React from "react";

// @material-ui/core components
import Divider from "@material-ui/core/Divider";

// images
import Roxy from "assets/media/img/404/Chachi_404.png";

// My Custom Components
import Button from "@material-ui/core/Button";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const CustomStandard404Page = (props) => {
  return (
    <div>
      <div>
        <div
          style={{
            display: "inline-block",
            marginRight: "20px",
            verticalAlign: "middle",
          }}
        >
          <img style={{ width: "200px" }} src={Roxy} />
        </div>
        <div style={{ display: "inline-block", verticalAlign: "middle" }}>
          <h2 style={{ marginTop: "5px" }}>Page not found :(</h2>
          <h5>
            Maybe the page you are looking for has been removed, or you typed in
            the wrong URL
          </h5>
        </div>
      </div>
      <Divider style={{ margin: "20px 0px 20px 0px" }} />
      <Button onClick={props.handleClick} simple="true">
        GO TO HOME PAGE
      </Button>
    </div>
  );
};

export default CustomStandard404Page;
