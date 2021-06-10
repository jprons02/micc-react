import React from "react";

// @material-ui/core components
import Divider from "@material-ui/core/Divider";

// My Custom Components
import Button from "@material-ui/core/Button";

const CustomStandard404Page = (props) => {
  return (
    <div>
      <h2>Page not found :(</h2>
      <h5>
        Maybe the page you are looking for has been removed, or you typed in the
        wrong URL
      </h5>
      <Divider style={{ margin: "20px 0px 20px 0px" }} />
      <Button onClick={props.handleClick} simple="true">
        GO TO HOME PAGE
      </Button>
    </div>
  );
};

export default CustomStandard404Page;
