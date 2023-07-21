import React, { useEffect, useState } from 'react';

// My Custom Components
import CasinoPromoCards from 'views/MRG/Pages/gaming/gamingPromos/casinoPromos/casinoPromoCards.js';
import CustomGamingPromoModal from 'components/CustomModal/CustomPromosModal/CustomGamingPromoModal.js';
import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Promo content
import { casinoContent } from 'views/MRG/Pages/gaming/gamingPromos/casinoPromos/cardContent/cardContent.js';

// Services
import { getPromoMonth } from 'services/functions/getPromoMonth.js';

const CasinoPromos = (props) => {
  const language = useLanguage();

  const [showModal, setShowModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState({});

  const monthContent = casinoContent(language, props.monthObj.en);

  const cardContent = language ? monthContent.data : monthContent.dataEs;
  const featuredArray = cardContent.filter((obj) => obj.featured === true);
  const contentArray = props.isFeatured ? featuredArray : cardContent;

  useEffect(() => {
    //Purpose is ability to link to specific promos from url
    // full example with month specified ENGLISH: http://localhost:3000/casino/promotions/july#1
    // full example ENGLISH: http://localhost:3000/casino/promotions#1
    // Need to call getPromoMonth to get the correct month object, was not working as props
    const monthObj = getPromoMonth('casinoPromos', language, props.params);

    casinoContent(language, monthObj.en).data.map((item) => {
      const itemId = item.id + 1;
      if (window.location.hash === `#${itemId}`) {
        setSelectedPromo(item);
        setShowModal(true);
      }
    });
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <CasinoPromoCards
        language={language}
        cardContent={contentArray}
        setSelectedPromo={setSelectedPromo}
        setShowModal={setShowModal}
      />
      <CustomGamingPromoModal
        selectedPromo={selectedPromo}
        closeModal={closeModal}
        showModal={showModal}
      />
      <PopupModal />
    </React.Fragment>
  );
};

export default CasinoPromos;
