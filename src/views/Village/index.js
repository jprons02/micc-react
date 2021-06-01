import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

// Context
import { PopupContext } from "contexts/PopupContext.js";
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";
import { PricingModalProvider } from "contexts/PricingModalContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import VillageHeader from "components/CustomHeaders/VillageHeader.js";
import VillageFooter from "components/CustomFooters/VillageFooter.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";
import CustomContactModal from "components/CustomModal/CustomContactModals/CustomContactModal.js";

// Pages
import Home from "views/Village/Pages/Home/home.js";
import GiftShop from "views/Village/Pages/GiftShop/giftShop.js";
import Museum from "views/Village/Pages/Museum/museum.js";
import AlligatorDemos from "views/Village/Pages/AlligatorDemos/alligatorDemos.js";
import OurLittleShack from "views/Village/Pages/OurLittleShack/ourLittleShack";
import VillageCovidPage from "views/Village/Pages/business_info/villageCovidPage.js";

// Business info
import { villageBusinessInfo } from "business_info/genericInfo.js";

// services
import { popupManager } from "services/popups/popupManager";

export default function Miccosukee(props) {
  let match = useRouteMatch();
  let location = useLocation();

  const [popupState, setPopupState] = useContext(PopupContext);
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // popup modal is triggered in main index file so that when user navigates around website and then back to home page, it does not trigger again.
  useEffect(() => {
    popupManager(setPopupState, popupState, location);
  }, []);

  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <ThemeProvider theme={theme("village")}>
      <PricingModalProvider>
        <div>
          <VillageHeader />
          <Switch>
            <Route exact path={`${match.path}/`} component={Home} />
            <Route
              exact
              path={`${match.path}/gift-shop`}
              component={GiftShop}
            />
            <Route exact path={`${match.path}/museum`} component={Museum} />
            <Route
              exact
              path={`${match.path}/alligator-demonstrations`}
              component={AlligatorDemos}
            />
            <Route
              exact
              path={`${match.path}/our-little-shack`}
              component={OurLittleShack}
            />
            <Route
              exact
              path={`${match.path}/covid-19`}
              component={VillageCovidPage}
            />
          </Switch>
          <VillageFooter />
          <PopupModal />
          <CustomContactModal
            showModal={showContactModal}
            closeModal={() => closeModal(setShowContactModal)}
            entity={villageBusinessInfo}
          />
        </div>
      </PricingModalProvider>
    </ThemeProvider>
  );
}
