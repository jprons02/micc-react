import "date-fns";
import React, { useEffect, useState, useContext } from "react";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/core/styles";

// @material-ui components
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// material-ui core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// My custom function
import {
  validateCheckIn,
  validateCheckOut,
} from "components/CustomForms/BookRoom/validateBookRoom.js";
import { setEstTime } from "services/setEstTime.js";

// Context
import { useLanguage } from "contexts/languageContext";

const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "white",
    },
  },
})(TextField);

const BookRoomForm = (props) => {
  const language = useLanguage();
  // Use function to get tomorrow variable
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  // Need getToday() and tomorrow variables for default check in/out.
  // Set hours of date to 0. We do not want to compare selected times, only dates.
  const getToday = () => {
    const today = setEstTime();
    today.setHours(0, 0, 0, 0);
    return today;
  };
  const tomorrow = getToday().addDays(1);

  const [checkInDate, setCheckInDate] = useState(getToday());
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const resetState = () => {
    setCheckInDate(getToday());
    setCheckOutDate(tomorrow);
    setAdults(1);
    setChildren(0);
  };

  // Set state to default on mount/unmount
  useEffect(() => {
    resetState();
  }, []);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleDateChange = (date, setState) => {
    setState(date);
  };

  const errorExists = () => {
    if (
      validateCheckIn(checkInDate).error ||
      validateCheckOut(checkOutDate, checkInDate).error
    ) {
      return true;
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const getUrl = () => {
      const baseUrl =
        "https://miccosukee.webhotel.microsdc.us/bp/availStart.jsp?";
      const numberOfRooms = `numberOfRooms=${1}&`;
      const numberOfAdults = `numberOfAdults=${adults}&`;
      const numberOfChildren = `numberOfChildren=${children}&`;
      const checkinMonth = `checkinMonth=${checkInDate.getMonth() + 1}&`;
      const checkinDay = `checkinDay=${checkInDate.getDate()}&`;
      const checkinYear = `checkinYear=${checkInDate.getFullYear()}&`;
      const checkoutMonth = `checkoutMonth=${checkOutDate.getMonth() + 1}&`;
      const checkoutDay = `checkoutDay=${checkOutDate.getDate()}&`;
      const checkoutYear = `checkoutYear=${checkOutDate.getFullYear()}`;

      return (
        baseUrl +
        numberOfRooms +
        numberOfAdults +
        numberOfChildren +
        checkinMonth +
        checkinDay +
        checkinYear +
        checkoutMonth +
        checkoutDay +
        checkoutYear
      );
    };
    window.open(getUrl());
  };

  const renderCheckInCheckOut = () => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <GridContainer justify="space-around">
          <GridItem sm={12} md={6}>
            <DatePicker
              disablePast={true}
              error={validateCheckIn(checkInDate).error}
              format="MM/dd/yyyy"
              margin="normal"
              id="check-in"
              label={
                validateCheckIn(checkInDate).error
                  ? validateCheckIn(checkInDate).errorMessage
                  : language
                  ? "Check In"
                  : "Llegada"
              }
              fullWidth={true}
              value={checkInDate}
              onChange={(date) => handleDateChange(date, setCheckInDate)}
            />
          </GridItem>
          <GridItem sm={12} md={6}>
            <DatePicker
              disablePast={true}
              error={validateCheckOut(checkOutDate, checkInDate).error}
              format="MM/dd/yyyy"
              margin="normal"
              id="check-out"
              label={
                validateCheckOut(checkOutDate, checkInDate).error
                  ? validateCheckOut(checkOutDate, checkInDate).errorMessage
                  : language
                  ? "Check Out"
                  : "Salida"
              }
              fullWidth={true}
              value={checkOutDate}
              onChange={(date) => handleDateChange(date, setCheckOutDate)}
            />
          </GridItem>
        </GridContainer>
      </MuiPickersUtilsProvider>
    );
  };

  const renderAdultsChildren = () => {
    return (
      <GridContainer justify="space-around">
        <GridItem sm={12} md={6}>
          <CustomTextField
            onChange={(e) => handleChange(e, setAdults)}
            value={adults}
            error={false}
            name="adults"
            id="adults"
            label={language ? "Adults" : "Adultos"}
            fullWidth={true}
            variant="filled"
            select
          >
            <MenuItem value={1}>{1}</MenuItem>
            <MenuItem value={2}>{2}</MenuItem>
            <MenuItem value={3}>{3}</MenuItem>
            <MenuItem value={4}>{4}</MenuItem>
          </CustomTextField>
        </GridItem>
        <GridItem sm={12} md={6}>
          <CustomTextField
            onChange={(e) => handleChange(e, setChildren)}
            value={children}
            error={false}
            name="children"
            id="children"
            label={language ? "Children" : "Niños"}
            fullWidth={true}
            variant="filled"
            select
          >
            <MenuItem value={0}>{0}</MenuItem>
            <MenuItem value={1}>{1}</MenuItem>
            <MenuItem value={2}>{2}</MenuItem>
            <MenuItem value={3}>{3}</MenuItem>
            <MenuItem value={4}>{4}</MenuItem>
          </CustomTextField>
        </GridItem>
      </GridContainer>
    );
  };

  return (
    <React.Fragment>
      <form>
        {renderCheckInCheckOut()}
        {renderAdultsChildren()}
        <div
          style={{
            position: "relative",
          }}
        >
          <Button
            style={{
              margin: "35px 0 0 0",
            }}
            disabled={errorExists()}
            fullWidth
            onClick={submit}
            usetheme="contained"
          >
            {language ? "Submit" : "Enviar"}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default BookRoomForm;

//Build URL example:
/*
	$url = 'https://miccosukee.webhotel.microsdc.us/bp/availStart.jsp?' .
	"numberOfRooms=" . $rooms . '&' .
	"numberOfAdults=" . $adultsElement['value'] . '&' .
	"numberOfChildren=" . $childrenElement['value'] . '&' .
	"checkinMonth=" . $checkInMonth . '&' .
	"checkinDay=" . $checkInDay . '&' .
	"checkinYear=" . $checkInYear . '&' .
	"checkoutMonth=" . $checkOutMonth . '&' .
	"checkoutDay=" . $checkOutDay . '&' .
	"checkoutYear=" . $checkOutYear;
*/
