import React from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

export const august = {
  type: 'calendar',
  month: 'august',
  monthEs: 'agosto',
  calendarLink:
    'https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/august_en.pdf',
  calendarLinkEs:
    'https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/august_sp.pdf',
  data: (classes) => {
    return (
      <div className={classes.calendarMainSectionStyle}>
        <div>
          <p className={classes.calendarMainDetailsWhite}>
            Noon High Hand Payout Once Daily at 12 PM
          </p>
          <p className={classes.calendarMainDetailsGold}>
            *One Card Takes All*
          </p>
        </div>
        <div className={classes.calendarItemMargin}>
          <p className={classes.calendarSectionTitleStyle}>
            MONDAYS, TUESDAYS & THURSDAYS
          </p>
          <GridContainer
            key="section1"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $2,000
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              <span className={classes.calendarDescriptionStyleLeftSpan}>
                **
              </span>
              12:30 PM - 9 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              <span className={classes.calendarDescriptionStyleLeftSpan}>
                **
              </span>
              9 PM - 11 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $2,000{' '}
            </GridItem>
            <GridItem xs={12} className={classes.calendarDescriptionDisclaimer}>
              **Two cards pays 100%, one card pays 50%
            </GridItem>
          </GridContainer>
          <p className={classes.calendarSectionTitleStyle}>Bonus Wednesdays</p>
          <GridContainer
            key="section2"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $2,000
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              12 PM - 9 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 20 mins
              </span>
            </GridItem>
          </GridContainer>
          <p className={classes.calendarSectionTitleStyle}>
            Fridays & Saturdays
          </p>
          <GridContainer
            key="section3"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $1,500
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              12:30 PM - 6:30 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              7 PM - 10 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $1,000{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10:30 PM - 12 AM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
          </GridContainer>
          <p className={classes.calendarSectionTitleStyle}>Sundays</p>
          <GridContainer
            key="section4"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $1,500
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              12:30 PM - 10 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  },
  dataEs: (classes) => {
    return (
      <div className={classes.calendarMainSectionStyle}>
        <div>
          <p className={classes.calendarMainDetailsWhite}>
            Noon High Hand Payout Once Daily at 12 PM
          </p>
          <p className={classes.calendarMainDetailsGold}>
            *One Card Takes All*
          </p>
        </div>
        <div className={classes.calendarItemMargin}>
          <p className={classes.calendarSectionTitleStyle}>
            MONDAYS, TUESDAYS & THURSDAYS
          </p>
          <GridContainer
            key="section1"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $2,000
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              <span className={classes.calendarDescriptionStyleLeftSpan}>
                **
              </span>
              12:30 PM - 9 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              <span className={classes.calendarDescriptionStyleLeftSpan}>
                **
              </span>
              9 PM - 11 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $2,000{' '}
            </GridItem>
            <GridItem xs={12} className={classes.calendarDescriptionDisclaimer}>
              **Two cards pays 100%, one card pays 50%
            </GridItem>
          </GridContainer>
          <p className={classes.calendarSectionTitleStyle}>Bonus Wednesdays</p>
          <GridContainer
            key="section2"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $2,000
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              12 PM - 9 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 20 mins
              </span>
            </GridItem>
          </GridContainer>
          <p className={classes.calendarSectionTitleStyle}>
            Fridays & Saturdays
          </p>
          <GridContainer
            key="section3"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $1,500
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              12:30 PM - 6:30 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              7 PM - 10 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $1,000{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10:30 PM - 12 AM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
          </GridContainer>
          <p className={classes.calendarSectionTitleStyle}>Sundays</p>
          <GridContainer
            key="section4"
            className={classes.calendarDescriptionSection}
          >
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              10 AM - 12 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $1,500
            </GridItem>
            <GridItem
              xs={7}
              md={4}
              className={classes.calendarDescriptionStyleLeft}
            >
              12:30 PM - 10 PM
            </GridItem>
            <GridItem
              xs={4}
              md={7}
              className={classes.calendarDescriptionStyleRight}
            >
              $500{' '}
              <span className={classes.calendarDescriptionStyleRightSpan}>
                every 30 mins
              </span>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  },
};
