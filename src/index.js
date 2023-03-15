import React from 'react';
import ReactDOM from 'react-dom';
import { AlertProvider } from 'contexts/AlertContext.js';
import 'assets/scss/material-kit-react.scss?v=1.9.0';

//FONTS
//PHOSPHATE
import './fonts/Phosphate/phosphate-solid-02-webfont.ttf';
//AVENIR NEXT
import './fonts/AvenirNext/avenir_next.ttf';
//AVENIR NEXT CONDENSED
import './fonts/AvenirNextCondensedBold/AvenirNextCondensed-Bold-01.ttf';
import './fonts/AvenirNextCondensed/AvenirNextCondensed-Regular-08.ttf';
import './fonts/AvenirNextCondensedHeavy/AvenirNextCondensed-Heavy-09.ttf';
//END FONTS

import App from './App.js';
import { keys } from './keys';

//google tag manager:
//https://medium.com/finnovate-io/integrating-google-tag-manager-with-a-react-app-5a8584ee2251
import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: 'GTM-MW544LL',
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <AlertProvider>
    <App />
  </AlertProvider>,
  document.getElementById('root')
);
