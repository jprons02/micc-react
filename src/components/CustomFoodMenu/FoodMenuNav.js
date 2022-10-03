import React from 'react';
import PropTypes from 'prop-types';

// @material-ui core
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: 0 }} p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderPriceTable = (header, rows) => {
    return (
      <TableContainer style={{ marginBottom: '30px' }} component={Paper}>
        <Table
          style={{ backgroundColor: '#f5f5f5' }}
          className={classes.table}
          aria-label="simple table"
        >
          {header === '' ? null : (
            <TableHead>
              <TableRow>
                <TableCell>{header}</TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderTab = () => {
    return props.menu.map((item, index) => {
      return <Tab key={item.name} label={item.name} {...a11yProps(index)} />;
    });
  };

  const renderTabPanel = () => {
    return props.menu.map((item, index) => {
      const renderItems = () => {
        // If the menu has subMenu, example) Main, Sides, Salad,
        if (item.subMenu) {
          return item.subMenu.map((subItem) => {
            return (
              <React.Fragment key={subItem.name}>
                {renderPriceTable(subItem.name, subItem.items)}
              </React.Fragment>
            );
          });
        }
        // If the menu does not have subMenu, example) Drinks, Kid's Menu
        if (item.items) {
          return (
            <React.Fragment>{renderPriceTable('', item.items)}</React.Fragment>
          );
        }
      };

      return (
        <TabPanel key={item.name} value={value} index={index}>
          {renderItems()}
        </TabPanel>
      );
    });
  };

  const disclaimer = (title) => {
    if (title === 'Sawgrass Cafe Menu') {
      return (
        <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
          8.7% tax plus a 20% service charge will be added to all items prepared
          to order.
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {renderTab()}
        </Tabs>
      </AppBar>
      <div style={{ marginTop: '20px' }}>{renderTabPanel()}</div>
      {disclaimer(props.title)}
    </div>
  );
}
