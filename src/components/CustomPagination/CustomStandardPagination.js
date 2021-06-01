// THIS IS FROM MATERIAL UI LAB
// THIS IS FROM MATERIAL UI LAB
// THIS IS FROM MATERIAL UI LAB

// Example of object needed to be passed from parent component as "pages":
/*
policePages = [
  {
    pageNumber: 1,
    location: "/administration/police",
  },
  {
    pageNumber: 2,
    location: "/administration/police/locations",
  },
  {
    pageNumber: 3,
    location: "/administration/police/specialized-units",
  },
];
*/

import React, { useState, useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiPagination-ul": {
      justifyContent: "center !important",
    },
  },
}));

const CustomPagination = (props) => {
  let location = useLocation();

  useEffect(() => {
    if (props.pages) {
      props.pages.map((item) => {
        if (location.pathname === item.location) {
          setPage(item);
        }
      });
    }
  }, [location]);

  const classes = useStyles();
  const [page, setPage] = useState({ pageNumber: 1, location: "" });

  const handleChange = (event, value) => {
    props.pages.map((item) => {
      if (item.pageNumber === value) {
        props.history.push(item.location);
      }
    });
  };

  return (
    <div style={props.customStyle || {}} className={classes.root}>
      <Pagination
        count={props.pages.length}
        page={page.pageNumber}
        onChange={handleChange}
      />
    </div>
  );
};

export default withRouter(CustomPagination);
