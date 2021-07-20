import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// business info
import { airboatsPricing } from "business_info/admission.js";

// styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/airboats/pricing.js";

// context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

const Pricing = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <GridContainer
      style={{ marginTop: "30px", paddingBottom: "60px" }}
      justify="center"
    >
      <GridItem xs={12} style={{ marginBottom: "35px" }}>
        <h1 style={{ fontStyle: "italic", fontWeight: "400" }}>
          {language ? `CHOOSE YOUR ADVENTURE!` : `ELIJA SU AVENTURA`}
        </h1>
        <p className={classes.disclaimer}>
          {language
            ? `*All tickets need to be purchased from airboat front desk.`
            : `*Todas las entradas deben ser compradas en el mostrador de airboats.`}
        </p>
      </GridItem>
      {airboatsPricing.map((item) => {
        return (
          <GridItem
            key={item.detail}
            style={{
              textAlign: "center",
              border: "1px solid #c6c6c6",
              borderRadius: "15px",
              padding: "30px 15px",
              margin: "10px",
            }}
            md={3}
            sm={12}
          >
            <h5 className={classes.detail}>{item.detail(language)}</h5>
            <h2 className={classes.title}>{item.title(language)}</h2>
            <h3 className={classes.price}>{item.price(language)}</h3>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default Pricing;
