import React from 'react';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const PokerDisclaimer = (props) => {
  const language = useLanguage();

  return (
    <p className={props.className ? props.className : ''}>
      {language
        ? 'Subject to change or cancellation without notice at the discretion of management. See your gaming attendant for details. Must be 18 years or older with proper ID.'
        : 'Sujeto a cambio o cancelación sin previo aviso a discreción de la gerencia. Consulte a su asistente de juego para obtener más detalles. Debe tener 18 años o más con identificación adecuada.​'}
    </p>
  );
};

export default PokerDisclaimer;
