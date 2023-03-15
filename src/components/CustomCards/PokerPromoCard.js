import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import Icon from '@material-ui/core/Icon';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import pokerPromoCardStyle from 'assets/jss/material-kit-react/views/mrg/pokerPromotionCardStyles';

const styles = pokerPromoCardStyle;

const useStyles = makeStyles(styles);

export default function PokerPromoCard(props) {
  const classes = useStyles();

  //<Hidden smDown>
  /**
   * <div>
      <Hidden mdUp>
        <img src={image2} className={classes.contentImage} />
      </Hidden>
      <Hidden smDown>
        <img src={image2desktop} className={classes.contentImage} />
      </Hidden>
    </div>
   */
  const renderDesktopTitle = () => {
    const leftTitle = () => {
      if (props.content.title.fullWidthLeft) {
        return (
          <GridItem md={12}>
            <p className={classes.topCardLeftTitle}>
              <span className={classes.titleUpper}>
                {props.content.title.leftStandard}
              </span>
            </p>
          </GridItem>
        );
      } else {
        return (
          <GridItem md={6}>
            <p className={classes.topCardLeftTitle}>
              <span className={classes.titleUpper}>
                {props.content.title.leftUpper}
              </span>
              <br />
              <span>{props.content.title.leftLower}</span>
            </p>
          </GridItem>
        );
      }
    };

    const rightTitle = () => {
      if (props.content.title.fullLengthLeft) {
        return null;
      } else if (props.content.title.fullWidthRight) {
        return (
          <GridItem md={6}>
            <p className={classes.topCardRightTitle}>
              {props.content.title.rightStandard}
            </p>
          </GridItem>
        );
      } else {
        return (
          <GridItem md={6}>
            <p className={classes.topCardRightTitle}>
              {props.content.title.rightUpper}
              <br />
              {props.content.title.rightLower}
            </p>
          </GridItem>
        );
      }
    };

    return (
      <GridContainer className={classes.topCardBody}>
        {leftTitle()}
        {rightTitle()}
      </GridContainer>
    );
  };

  const renderMobileTitle = () => {
    return (
      <GridContainer className={classes.topCardBody}>
        {props.content.title.fullWidthLeft ? (
          <GridItem md={12}>
            <p className={classes.topCardLeftTitle}>
              <span className={classes.titleUpper}>
                {props.content.title.leftStandard}
              </span>
            </p>
          </GridItem>
        ) : (
          <React.Fragment>
            <GridItem md={6}>
              <p className={classes.topCardLeftTitle}>
                <span className={classes.titleUpper}>
                  {props.content.title.leftStandard}
                </span>
              </p>
            </GridItem>
            <GridItem md={6}>
              <p className={classes.topCardRightTitle}>
                {props.content.title.rightStandard}
              </p>
            </GridItem>
          </React.Fragment>
        )}
      </GridContainer>
    );
  };

  return (
    <Card className={props.classes.serviceCards} style={{ border: 'none' }}>
      <CardBody style={{ padding: '0px' }}>
        <Hidden mdUp>{renderMobileTitle()}</Hidden>
        <Hidden smDown>{renderDesktopTitle()}</Hidden>

        {props.content.body.map((item) => {
          return (
            <GridContainer key={item.id} className={classes.bottomCardBody}>
              <GridItem md={6}>
                <p
                  style={{
                    margin: '0px',
                    fontSize: '28px',
                    fontWeight: '600',
                    fontFamily: 'AvenirNextBold, sans-serif',
                    color: '#f8a14e',
                  }}
                >
                  {item.left}
                </p>
              </GridItem>
              <GridItem md={6} style={{ padding: '2px' }}>
                <p
                  style={{ margin: '0px', fontSize: '23px', fontWeight: '400' }}
                >
                  {item.right}
                </p>
              </GridItem>
            </GridContainer>
          );
        })}

        <div
          style={{
            backgroundColor: '#231f1f',
            color: 'white',
            borderBottomRightRadius: '6px',
            borderBottomLeftRadius: '6px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              paddingTop: '8px',
              paddingBottom: '12px',
            }}
          >
            <p style={{ fontFamily: 'AvenirNextCondensed', fontSize: '18px' }}>
              {props.content.disclaimer}
            </p>
          </div>
          {props.buttonText ? (
            <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
              <Button
                className={props.classes.buttonStyle}
                onClick={props.buttonFunction ? props.buttonFunction : null}
              >
                {props.buttonText}
              </Button>
            </div>
          ) : null}
        </div>
      </CardBody>
    </Card>
  );
}
