import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    paddingRight: 0,
    minWidth: "70px",
  },
  body: {
    fontSize: 12,
    paddingRight: 0,
    minWidth: "70px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
  tableLayout: "auto",
  width: "100%",
});

export default function CustomVirtualEventSchedule(props) {
  const classes = useStyles();

  // Formating away from military time and adding AM/PM
  const formatTime = (hour, minute) => {
    if (hour === 0 && minute === 0) {
      return "TBA";
    }
    if (hour == 12) {
      return `${hour}:${minute} PM`;
    }
    if (hour > 12) {
      return `${hour - 12}:${minute} PM`;
    }
    if (hour < 12) {
      return `${hour}:${minute} AM`;
    }
  };

  const renderTableBody = () => {
    if (props.events) {
      return props.events.map((event) =>
        event.purchased ? (
          <StyledTableRow key={event.key}>
            <StyledTableCell component="th" scope="row">
              {formatTime(event.releaseTime.hour, event.releaseTime.minutes)}
            </StyledTableCell>
            <StyledTableCell align="left">{event.key}</StyledTableCell>
          </StyledTableRow>
        ) : null
      );
    } else {
      return (
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            {"N/A"}
          </StyledTableCell>
          <StyledTableCell align="left">
            {"No scheduled events at this time."}
          </StyledTableCell>
        </StyledTableRow>
      );
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TIME</StyledTableCell>
            <StyledTableCell align="left">ACTIVITY</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </TableContainer>
  );
}
