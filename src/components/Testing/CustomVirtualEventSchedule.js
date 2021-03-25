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

  const renderTableBody = () => {
    if (props.events) {
      return props.events.map((event) => (
        <StyledTableRow key={event.key}>
          <StyledTableCell component="th" scope="row">
            {`${event.releaseTime.hour}:${event.releaseTime.minutes}`}
          </StyledTableCell>
          <StyledTableCell align="left">{event.key}</StyledTableCell>
        </StyledTableRow>
      ));
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
