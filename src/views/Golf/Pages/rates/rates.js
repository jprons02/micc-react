import React, { useState } from 'react';

// My Custom Component
import HeroSection from 'components/CustomSections/HeroSection.js';
import RaisedContainer from 'components/CustomSections/RaisedContainer';
import NavPills from 'components/NavPills/NavPills.js';

// @material-ui core
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Images
import bgImage from 'assets/media/img/golf/Golf_Header.jpg';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Rates = () => {
  const language = useLanguage();
  const [showCourseRates, setShowCourseRates] = useState({
    weekday: false,
    weekend_holiday: false,
  });

  function createData(id, day, time, price) {
    return { id, day, time, price };
  }

  const weekdayRows = [
    createData(
      1,
      language ? 'Monday' : 'lunes',
      language ? 'All Day' : 'Todo el día',
      '$40.00'
    ),
    createData(
      2,
      language ? 'Tuesday – Friday' : 'martes – viernes',
      language ? '7:00 A.M. – 1:00 P.M.' : '7:00 A.M. - 1:00 P.M.',
      '$50.00'
    ),
    createData(
      3,
      language ? 'Tuesday – Friday' : 'martes – viernes',
      '1:00 P.M. – 6:00 P.M.',
      '$40.00'
    ),
    /*
    createData(
      4,
      language ? "Tuesday – Friday" : "martes – viernes",
      language ? "4:00 P.M. – Close" : "4:00 P.M. en adelante",
      "$35.00"
    ),
    */
    createData(
      5,
      language
        ? 'Junior Golfers (5 – 17 years old)'
        : 'Golfistas Jóvenes (Entre 5 y 17 años)',
      '',
      '$20.00'
    ),
    createData(
      6,
      language ? 'Member Guest Rate' : 'Tarifa de Miembros',
      '',
      '$40.00'
    ),
    createData(
      7,
      language ? 'Nine Hole Rate' : 'Tarifa para Nueve Hoyos',
      '',
      '$35.00'
    ),
    /*
    createData(8, language ? "Replay" : "Jugar un segundo juego", "", "$25.00"),
    */
  ];

  const weekendRows = [
    createData(
      9,
      language ? 'Saturday & Sunday / Holiday' : 'sábado y domingo / Feriados',
      language ? '7:00 A.M. – 1:00 P.M.' : '7:00 A.M. – 1:00 P.M.',
      '$65.00'
    ),
    createData(
      10,
      language ? 'Saturday & Sunday / Holiday' : 'sábado y domingo / Feriados',
      '1:00 P.M. – 6:00 P.M.',
      '$50.00'
    ),
    /*
    createData(
      11,
      language ? "Saturday & Sunday / Holiday" : "sábado y domingo / Feriados",
      language ? "4:00 P.M. – Close" : "4:00 P.M. en adelante",
      "$40.00"
    ),
    */
    createData(
      12,
      language
        ? 'Junior Golfers (5 – 17 years old)'
        : 'Golfistas Jóvenes (Entre 5 y 17 años)',
      '',
      '$25.00'
    ),
    createData(
      13,
      language ? 'Member Guest Rate' : 'Tarifa de Miembros',
      '',
      '$50.00'
    ),
    createData(
      14,
      language ? 'Nine Hole Rate' : 'Tarifa para Nueve Hoyos',
      '',
      '$40.00'
    ),
    /*
    createData(
      15,
      language ? "Replay" : "Jugar un segundo juego",
      "",
      "$30.00"
    ),
    */
  ];

  const golfCartRows = [
    createData(
      16,
      language ? 'Premier Members' : 'Miembros Premier',
      language ? 'Included in membership' : 'Incluido en membresía'
    ),
    createData(
      17,
      language
        ? 'Annual Members (Single or Family)'
        : 'Miembros Anuales (Soltero o Familia)',
      '$25'
    ),
    createData(18, language ? '9 Holes' : '9 Hoyos', '$15'),
  ];

  const practiceBallsRows = [
    createData(
      19,
      language ? 'Premier Members' : 'Miembros Premier',
      language ? 'Included in membership' : 'Incluido en membresía'
    ),
    createData(
      20,
      language ? 'Members' : 'Miembros',
      language ? '1 bucket per day' : '1 canasta por día'
    ),
    createData(
      21,
      language
        ? 'Non-Members – Small Basket (30 balls)'
        : 'No Miembros – Canasta Pequeña (30 bolas)',
      '$6'
    ),
    createData(
      22,
      language
        ? 'Non-Members – Medium Basket (60 balls)'
        : 'No Miembros – Canasta Mediana (60 bolas)',
      '$9'
    ),
    createData(
      23,
      language
        ? 'Non-Members – Large Basket (90 balls)'
        : 'No Miembros – Canasta Grande (90 bolas)',
      '$12'
    ),
  ];

  const handicapRows = [
    createData(
      24,
      language ? 'Members' : 'Miembros',
      language ? 'Included in membership' : 'Incluido en membresía'
    ),
    createData(
      25,
      language ? 'Non-Members' : 'No Miembros',
      language ? '$25 (Annual fee)' : '$25 (Pago anual)'
    ),
  ];

  const instructionRows = [
    createData(
      26,
      language
        ? 'PGA Certified Professional – 30 Minutes'
        : 'Profesional Certificado por PGA – 30 Minutos',
      '$50'
    ),
    createData(
      27,
      language
        ? 'PGA Certified Professional – 1 Hour'
        : 'Profesional Certificado por PGA – 1 Hora',
      '$95'
    ),
    createData(
      28,
      language
        ? 'Teaching Professional – 30 Minutes'
        : 'Maestro Profesional – 30 Minutos',
      '$40'
    ),
    createData(
      29,
      language
        ? 'Teaching Professional – 1 Hour'
        : 'Maestro Profesional – 1 Hora',
      '$60'
    ),
  ];

  const clubRentalsRows = [
    createData(30, language ? '9 Holes' : '9 Hoyos', '$25'),
    createData(31, language ? '18 Holes' : '18 Hoyos', '$50'),
  ];

  const advanceTeeTimesRows = [
    createData(
      32,
      language ? 'Members' : 'Miembros',
      language ? '10 days in advance' : '10 días por adelantado'
    ),
    createData(
      33,
      language ? 'Non-Members' : 'No Miembros',
      language ? '7 days in advance' : '7 días por adelantado'
    ),
  ];

  const [showExtraRates, setShowExtraRates] = useState({
    golfCart: false,
    practiceBalls: false,
    handicap: false,
    instructions: false,
    clubRentals: false,
    advanceTeeTimes: false,
  });

  const tableStyle = {
    margin: '10px 1px 20px 1px',
    maxWidth: '800px',
    width: '99%',
  };

  const renderWeekdayTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{language ? 'Weekday' : 'Días de Semana'}</TableCell>
              <TableCell align="right">{language ? 'Time' : 'Hora'}</TableCell>
              <TableCell align="right">
                {language ? 'Price' : 'Precios'}
              </TableCell>
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
              <TableCell>
                {language ? 'Weekend & Holiday' : 'Fines de Semana y Feriados'}
              </TableCell>
              <TableCell align="right">{language ? 'Time' : 'Hora'}</TableCell>
              <TableCell align="right">
                {language ? 'Price' : 'Precios'}
              </TableCell>
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
              <TableCell>{language ? 'Customer' : 'Cliente'}</TableCell>
              <TableCell align="right">
                {language ? 'Price' : 'Precios'}
              </TableCell>
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
              <TableCell>{language ? 'Customer' : 'Cliente'}</TableCell>
              <TableCell align="right">
                {language ? 'Price' : 'Precios'}
              </TableCell>
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
              <TableCell>{language ? 'Customer' : 'Cliente'}</TableCell>
              <TableCell align="right">
                {language ? 'Price' : 'Precios'}
              </TableCell>
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
              <TableCell>{language ? 'Instructor' : 'Instructor'}</TableCell>
              <TableCell align="right">
                {language ? 'Price' : 'Precios'}
              </TableCell>
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
              <TableCell>
                {language ? 'Course Type' : 'Tipo de Campo'}
              </TableCell>
              <TableCell align="right">
                {language ? 'Price' : 'Precios'}
              </TableCell>
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

  const renderAdvancedTeeTimesTable = () => {
    return (
      <TableContainer style={tableStyle} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{language ? 'Customer' : 'Cliente'}</TableCell>
              <TableCell align="right">
                {language ? 'Details' : 'Detalles'}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {advanceTeeTimesRows.map((row) => (
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
            tabButton: language ? 'Course Rates' : 'Precios de campos de golf',
            tabContent: <span>{renderCourseContent()}</span>,
          },
          {
            tabButton: language ? 'Other Rates' : 'Otros precios',
            tabContent: <span>{renderOtherContent()}</span>,
          },
        ]}
      />
    );
  };

  const renderCourseContent = () => {
    const sectionHeaderStyle = {
      textDecoration: 'underline',
      cursor: 'pointer',
    };

    return (
      <div style={{ marginBottom: '40px' }}>
        <h4
          onClick={() =>
            setShowCourseRates({
              ...showCourseRates,
              weekday: !showCourseRates.weekday,
            })
          }
          style={sectionHeaderStyle}
        >
          {language ? 'Weekday Rates' : 'Días de Semana'}
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
          {language ? 'Weekend & Holiday Rates' : 'Fines de Semana y Feriados'}
        </h4>
        <Collapse in={showCourseRates.weekend}>{renderWeekendTable()}</Collapse>
      </div>
    );
  };

  const renderOtherContent = () => {
    const sectionHeaderStyle = {
      textDecoration: 'underline',
      cursor: 'pointer',
    };

    return (
      <div style={{ marginBottom: '40px' }}>
        <h4
          onClick={() =>
            setShowExtraRates({
              ...showExtraRates,
              advanceTeeTimes: !showExtraRates.advanceTeeTimes,
            })
          }
          style={sectionHeaderStyle}
        >
          {language ? 'Advance Tee Times' : 'Horarios de Salida Anticipados'}
        </h4>
        <Collapse in={showExtraRates.advanceTeeTimes}>
          {renderAdvancedTeeTimesTable()}
        </Collapse>
        <h4
          onClick={() =>
            setShowExtraRates({
              ...showExtraRates,
              golfCart: !showExtraRates.golfCart,
            })
          }
          style={sectionHeaderStyle}
        >
          {language ? 'Golf Cart Rates' : 'Precios para Carros de Golf'}
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
          {language ? 'Practice Balls' : 'Bolas de Práctica'}
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
          {language ? 'Golf Handicap Fees' : 'Precios para Discapacitados'}
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
          {language ? 'Golf Instructions' : 'Clases de Golf'}
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
          {language ? 'Golf Club Rentals' : 'Alquiler de Palos de Golf'}
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
        <h2>{language ? 'Rates & Pricing' : 'Tarifas y Precios'}</h2>
        {renderNavPills()}
        <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
          {language
            ? `*No rain checks unless course closed and/or is declared unplayable.Group rates available upon request. All fees are per player. Rates subject to change or cancellation at the discretion of management.`
            : `*No se realizarán devoluciones o cambios de entradas salvo que los campos estén cerrados u ocurran acontecimientos que impidan continuar con el juego. Consulte por tarifas de grupo. Los precios son por jugador. Las tarifas están sujetas a cambio y podrían ser canceladas a discreción de la gerencia.`}
        </p>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Rates;
