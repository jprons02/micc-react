import React, { useState } from "react";

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";
import NavPills from "components/NavPills/NavPills.js";

// @material-ui core
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// Images
import bgImage from "assets/img/bg3.jpg";

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

function createData(id, day, time, price) {
  return { id, day, time, price };
}

const weekdayRows = [
  createData(1, "Monday", "All Day", "$40.00"),
  createData(2, "Tuesday – Friday", "Open – 11:59 A.M.", "$50.00"),
  createData(3, "Tuesday – Friday", "12:00 P.M. – 3:59 P.M", "$40.00"),
  createData(4, "Tuesday – Friday", "4:00 P.M. – Close", "$35.00"),
  createData(5, "Junior Golfers (5 – 17 years old)", "", "$20.00"),
  createData(6, "Member Guest Rate", "", "$40.00"),
  createData(7, "Nine Hole Rate", "", "$30.00"),
  createData(8, "Replay", "", "$25.00"),
];

const weekendRows = [
  createData(9, "Saturday & Sunday / Holiday", "Open – 11:59 A.M.", "$65.00"),
  createData(
    10,
    "Saturday & Sunday / Holiday",
    "12:00 P.M. – 3:59 P.M.",
    "$50.00"
  ),
  createData(11, "Saturday & Sunday / Holiday", "4:00 P.M. – Close", "$40.00"),
  createData(12, "Junior Golfers (5 – 17 years old)", "", "$25.00"),
  createData(13, "Member Guest Rate", "", "$50.00"),
  createData(14, "Nine Hole Rate", "", "$35.00"),
  createData(15, "Replay", "", "$30.00"),
];

const golfCartRows = [
  createData(16, "Premier Members", "Included in membership"),
  createData(17, "Annual Members (Single or Family)", "$25"),
  createData(18, "9 Holes", "$15"),
];

const practiceBallsRows = [
  createData(19, "Premier Members", "Included in membership"),
  createData(20, "Members", "1 bucket per day"),
  createData(21, "Non-Members – Small Basket (34 balls)", "$5"),
  createData(22, "Non-Members – Small Basket (51 balls)", "$7"),
  createData(23, "Non-Members – Small Basket (102 balls)", "$10"),
];

const handicapRows = [
  createData(24, "Members", "Included in membership"),
  createData(25, "Non-Members", "$25 (Annual fee)"),
];

const instructionRows = [
  createData(26, "PGA Certified Professional – 30 Minutes", "$50"),
  createData(27, "PGA Certified Professional – 1 Hour", "$95"),
  createData(28, "Teaching Professional – 30 Minutes", "$40"),
  createData(29, "Teaching Professional – 1 Hour", "$60"),
];

const clubRentalsRows = [
  createData(30, "9 Holes", "$25"),
  createData(31, "18 Holes", "$50"),
];

const Rates = () => {
  const [showCourseRates, setShowCourseRates] = useState({
    weekday: false,
    weekend_holiday: false,
  });

  const [showExtraRates, setShowExtraRates] = useState({
    advanceTeeTimes: false,
    golfCart: false,
    practiceBalls: false,
    handicap: false,
    instructions: false,
    clubRentals: false,
  });

  const tableStyle = {
    margin: "10px 1px 20px 1px",
    maxWidth: "800px",
    width: "99%",
  };

  const renderWeekdayTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Weekday</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weekdayRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.day}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderWeekendTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Weekend &amp; Holiday</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weekendRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.day}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderGolfCartTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {golfCartRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.day}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderPracticeBallsTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {practiceBallsRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.day}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderHandicapTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {handicapRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.day}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderInstructionsTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructionRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.day}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderClubRentalsTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Type</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clubRentalsRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.day}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderNavPills = () => {
    return (
      <NavPills
        color="primary"
        tabs={[
          {
            tabButton: "Course Rates",
            tabContent: <span>{renderCourseContent()}</span>,
          },
          {
            tabButton: "Other Rates",
            tabContent: <span>{renderOtherContent()}</span>,
          },
        ]}
      />
    );
  };

  //{() => setShowCourseRates({ ...mrg, hours: !mrg.hours })}
  //{() => setShowCourseRates({ ...showCourseRates, weekday: !showCourseRates.weekday })}

  const renderCourseContent = () => {
    const sectionHeaderStyle = {
      textDecoration: "underline",
      cursor: "pointer",
    };

    return (
      <div style={{ marginBottom: "40px" }}>
        <h4
          onClick={() =>
            setShowCourseRates({
              ...showCourseRates,
              weekday: !showCourseRates.weekday,
            })
          }
          style={sectionHeaderStyle}
        >
          Weekday Rates
        </h4>
        <Collapse in={showCourseRates.weekday}>{renderWeekdayTable()}</Collapse>
        <h4
          onClick={() =>
            setShowCourseRates({
              ...showCourseRates,
              weekend: !showCourseRates.weekend,
            })
          }
          style={sectionHeaderStyle}
        >
          Weekend &amp; Holiday Rates
        </h4>
        <Collapse in={showCourseRates.weekend}>{renderWeekendTable()}</Collapse>
      </div>
    );
  };

  const renderOtherContent = () => {
    const sectionHeaderStyle = {
      textDecoration: "underline",
      cursor: "pointer",
    };

    return (
      <div style={{ marginBottom: "40px" }}>
        <h4
          onClick={() =>
            setShowExtraRates({
              ...showExtraRates,
              golfCart: !showExtraRates.golfCart,
            })
          }
          style={sectionHeaderStyle}
        >
          Golf Cart Rates
        </h4>
        <Collapse in={showExtraRates.golfCart}>
          {renderGolfCartTable()}
        </Collapse>
        <h4
          onClick={() =>
            setShowExtraRates({
              ...showExtraRates,
              practiceBalls: !showExtraRates.practiceBalls,
            })
          }
          style={sectionHeaderStyle}
        >
          Practice Balls
        </h4>
        <Collapse in={showExtraRates.practiceBalls}>
          {renderPracticeBallsTable()}
        </Collapse>
        <h4
          onClick={() =>
            setShowExtraRates({
              ...showExtraRates,
              handicap: !showExtraRates.handicap,
            })
          }
          style={sectionHeaderStyle}
        >
          Golf Handicap Fees
        </h4>
        <Collapse in={showExtraRates.handicap}>
          {renderHandicapTable()}
        </Collapse>
        <h4
          onClick={() =>
            setShowExtraRates({
              ...showExtraRates,
              instructions: !showExtraRates.instructions,
            })
          }
          style={sectionHeaderStyle}
        >
          Golf Instructions
        </h4>
        <Collapse in={showExtraRates.instructions}>
          {renderInstructionsTable()}
        </Collapse>
        <h4
          onClick={() =>
            setShowExtraRates({
              ...showExtraRates,
              clubRentals: !showExtraRates.clubRentals,
            })
          }
          style={sectionHeaderStyle}
        >
          Golf Club Rentals
        </h4>
        <Collapse in={showExtraRates.clubRentals}>
          {renderClubRentalsTable()}
        </Collapse>
      </div>
    );
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <h2>Rates &amp; Pricing</h2>
        {renderNavPills()}
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Rates;
