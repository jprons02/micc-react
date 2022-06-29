import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// Styles
import styles from 'assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js';

const useStyles = makeStyles(styles);

const RaisedContainer = ({ children, fullWidth, customMargin }) => {
  const classes = useStyles();

  // customMargin prop was used if audience primarily views on one device. It is rendered both.
  const renderStandard = () => {
    return (
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: customMargin ? customMargin : null }}
      >
        <div>
          <div
            className={!fullWidth ? classes.container : ''}
            style={!fullWidth ? { padding: '15px' } : { padding: '0px' }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  return renderStandard();
};

export default RaisedContainer;

/* ORIGINAL

const RaisedContainer = ({ children, fullWidth, customMargin }) => {
  const classes = useStyles();

  const renderStandard = () => {
    return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div
            className={!fullWidth ? classes.container : ""}
            style={!fullWidth ? { padding: "15px" } : { padding: "0px" }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  return renderStandard();
};

export default RaisedContainer;

*/
