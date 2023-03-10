import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <Card className={props.classes.serviceCards} style={{ border: 'none' }}>
      <CardBody style={{ padding: '0px' }}>
        <GridContainer className={classes.topCardBody}>
          <GridItem md={6}>
            <p className={classes.topCardLeftTitle}>
              <span className={classes.titleUpper}>
                {props.content.title.upper}
              </span>
              <br />
              <span>{props.content.title.lower}</span>
            </p>
          </GridItem>
          <GridItem md={6}>
            <p style={{ margin: '0px', fontSize: '24px', fontWeight: '600' }}>
              {props.content.time}
            </p>
          </GridItem>
        </GridContainer>
        {props.content.body.map((item) => {
          return (
            <GridContainer key={item.id} className={classes.bottomCardBody}>
              <GridItem md={6}>
                <p
                  style={{ margin: '0px', fontSize: '22px', fontWeight: '400' }}
                >
                  {item.left}
                </p>
              </GridItem>
              <GridItem md={6} style={{ padding: '2px' }}>
                <p
                  style={{ margin: '0px', fontSize: '18px', fontWeight: '400' }}
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
              paddingTop: '20px',
              paddingBottom: '15px',
            }}
          >
            <p>{props.content.disclaimer}</p>
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
