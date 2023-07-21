// URL TO GO TO POKER PAGE EX) /casino/promotions#poker
// URL TO GO TO MONTH AND POKER PAGE EX) /casino/promotions/august#poker

import React from 'react';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/pokerPromotionCardStyles.js';

// Card Content
import { pokerContent } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/cardContent.js';

const useStyles = makeStyles(styles);

const PokerPromos = (props) => {
  const language = useLanguage();
  const classes = useStyles();
  const monthContent = pokerContent(language, props.monthObj.en);

  const renderCard = () => {
    const content = language
      ? monthContent.data(classes)
      : monthContent.dataEs(classes);
    return content;
  };

  return <React.Fragment>{renderCard()}</React.Fragment>;
};

export default PokerPromos;
