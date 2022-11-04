import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

//my custom components
import LogoSlider from 'components/CustomSlider/logoSlider';

// context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';

// Business info
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import Button from 'components/CustomButtons/Button.js';

//import Footer from 'components/CustomFooters/MrgFooter.js';
import Footer from 'components/CustomFooters/SimpleFooter';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage/artsandcrafts.js';
import headerStyle from 'assets/jss/material-kit-react/views/miccosukee/components/header.js';

// header image
//import heroImageDesktop from 'assets/media/img/landingPages/aid2022/AID_landing-page-header.jpeg';
//import heroImageDesktop from 'assets/media/img/landingPages/aid2022/aid_banner_mobile.jpg';
//import heroImageMobile from 'assets/media/img/landingPages/aid2022/aid_banner_mobile.jpg';
import heroImageDesktop from 'assets/media/img/landingPages/artsandcrafts/artsHeroDesktop.jpg';
import heroImageMobile from 'assets/media/img/landingPages/artsandcrafts/artsHeroMobile.jpg';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image1 from 'assets/media/img/landingPages/artsandcrafts/alligator-demonstrations-700x500.jpg';
import image2 from 'assets/media/img/landingPages/artsandcrafts/Fashion-show-700x500.jpg';
import image3 from 'assets/media/img/landingPages/artsandcrafts/iriqouis-dancers-700x500.jpg';
import image4 from 'assets/media/img/landingPages/artsandcrafts/pride-dancers-700x500.jpg';
import image5 from 'assets/media/img/landingPages/artsandcrafts/White-mountain-apache-crown-dancers-700x500.jpg';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const ArtsAndCrafts = () => {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);
  const closeModal = (setState) => {
    setState(false);
  };

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  //const primary = '#ff6e31';
  const primary = '#fe5868';

  const artsAndCraftsContent = [
    {
      image: image1,
      color: primary,
      title: 'Miccosukee Indian Arts & Crafts Festival',
      body: [
        {
          key: 1,
          p: () => {
            return (
              <React.Fragment>
                <p className={classes.contentSectionDetails}>
                  {language
                    ? 'Native American culture comes alive in a three-day gathering of music, arts, and entertainment in the heart of the Florida Everglades.'
                    : 'La cultura Nativa Americana cobra vida en una reunión de tres días de música, arte y entretenimiento en el corazón de los Everglades de Florida.'}
                </p>
                <p className={classes.contentSectionDetails}>
                  {language
                    ? 'Gather in the Everglades for indigenous music and dance performances, an artisan market featuring crafts and authentic cuisine, and alligator demonstrations teaching this traditional art of survival.'
                    : 'Visite los Everglades para disfrutar de espectáculos de música y danza indígenas, un mercado artesanal, cocina auténtica, y demostraciones de caimanes que enseñan este arte tradicional de supervivencia.'}
                </p>
                <p className={classes.contentSectionDetails}>
                  {language
                    ? 'Live Music & Dance Performances by: Joe Tohonnie Jr. and the White Mountain Apache Crown Dancers, Iroquois Sky Dancers & Native Pride.'
                    : 'Actuaciones de danza y música en vivo a cargo de: Joe Tohonnie Jr. y White Mountain Apache Crown Dancers, Iroquois Sky Dancers y Native Pride.'}
                </p>
                <p className={classes.contentSectionDetails}>
                  {language
                    ? 'Airboat rides are available across the street.'
                    : 'Los paseos en hidrodeslizador están disponibles al otro lado de la calle.'}
                </p>
                <p className={classes.contentSectionDetails}>
                  {language
                    ? "You're invited to take part in our holiday tradition with your family."
                    : 'Los invitamos a participar en nuestra tradición navideña con su familia.'}
                </p>
              </React.Fragment>
            );
          },
        },
        {
          key: 2,
          p: () => {
            return (
              <div style={{ marginBottom: '25px', marginTop: '30px' }}>
                <div className={classes.subSectionFirst}>
                  <p className={classes.contentSectionDetails}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language ? 'Event Date: ' : 'Fecha del Evento: '}
                    </span>
                    {language
                      ? 'December 29 – 31, 2022, from 10 AM – 5 PM'
                      : '29 al 31 de diciembre, de 10 AM a 5 PM'}
                  </p>
                  <p className={classes.contentSectionDetails}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language ? 'Location: ' : 'Ubicación: '}
                    </span>
                    {language
                      ? 'Miccosukee Indian Village fairgrounds, 500 US Hwy 41, Miami, FL 33194.'
                      : 'Recinto Ferial del Miccosukee Indian Village Miccosukee Indian Village fairgrounds, 500 US Hwy 41, Miami, FL 33194'}
                  </p>
                  {/*
                  <div>
                    <p className={classes.contentSectionDetails}>
                      <span style={{ fontWeight: 'bold' }}>
                        {language ? 'Event Info:' : 'Información del Evento:'}
                      </span>
                    </p>
                    <ul
                      style={{
                        marginTop: '5px',
                      }}
                    >
                      <li>
                        <a
                          style={{
                            color: primary,
                            textDecoration: 'underline',
                            fontWeight: 400,
                          }}
                          href="https://mapa-media.s3.amazonaws.com/website/AID_Map_Schedule_Web.pdf"
                          target="_blank"
                        >
                          {language
                            ? 'Event Map & Schedule'
                            : 'Mapa y Horario del Evento'}
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            color: primary,
                            textDecoration: 'underline',
                            fontWeight: 400,
                          }}
                          href="https://mapa-media.s3.amazonaws.com/website/AID_Event_Participation_Waiver_Release.pdf"
                          target="_blank"
                        >
                          {language
                            ? 'Event Participation Waiver and Release'
                            : 'Formulario de Exención y Liberación de Responsabilidad en la Participación de Eventos'}
                        </a>
                      </li>
                    </ul>
                  </div>
                  */}
                  <Button
                    href="https://www.eventbrite.com/e/miccosukee-indian-arts-crafts-festival-2022-tickets-453191858047?aff=landingpage"
                    target="_blank"
                    style={{ backgroundColor: primary }}
                    className={classes.contentButton}
                  >
                    <span className={classes.contentButtonText}>
                      {language ? 'TICKETS' : 'ENTRADAS'}
                    </span>
                  </Button>
                </div>

                <div className={classes.subSection}>
                  <img className={classes.subSectionImage} src={image5} />
                  <p className={classes.contentSectionDetails}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language
                        ? 'Joe Tohonnie Jr. and the White Mountain Apache Crown Dancers'
                        : 'Joe Tohonnie Jr. and the White Mountain Apache Crown Dancers'}
                    </span>
                    <br />
                    {language
                      ? 'Hailing from the White Mountains of Arizona, the Apache Crown Dancers present a tradition of healing drawn directly from the highest elevations of their land. Led by singer and two-time Grammy nominee Joe Tohonnie Jr., the dancers summon the mountain spirits to protect them from enemies so they may live in harmony.'
                      : 'Provenientes de las Montañas Blancas de Arizona, los Apache Crown Dancers presentan una tradición de curación extraída directamente de las elevaciones más altas de su tierra. Dirigidos por el cantante y dos veces nominado al Grammy Joe Tohonnie Jr., los bailarines convocan a los espíritus de la montaña para que los protejan de los enemigos y puedan vivir en armonía.'}
                  </p>
                </div>
                <div className={classes.subSection}>
                  <img className={classes.subSectionImage} src={image3} />
                  <p className={classes.contentSectionDetails}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language
                        ? 'Iroquois Sky Dancers'
                        : 'Iroquois Sky Dancers'}
                    </span>
                    <br />
                    {language
                      ? 'The Sky Dancers from the Six Nations Reservation in southern Ontario, Canada, perform traditional Iroquois social dances passed down from generations. Musicians create melodies and rhythms with voice and traditional Iroquois instruments, while dancers perform in stunning hand-made traditional clothing.'
                      : 'Los Sky Dancers de la Reserva de las Seis Naciones en el sur de Ontario, Canadá, realizan bailes sociales tradicionales iroqueses transmitidos de generación en generación. Los músicos crean melodías y ritmos con la voz y los instrumentos tradicionales iroqueses, mientras que los bailarines se presentan con impresionantes vestimentas tradicionales hechas a mano.'}
                  </p>
                </div>
                <div className={classes.subSection}>
                  <img className={classes.subSectionImage} src={image4} />
                  <p className={classes.contentSectionDetails}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language
                        ? 'Native Pride Dancers'
                        : 'Native Pride Dancers'}
                    </span>
                    <br />
                    {language
                      ? 'Composed of members of various Tribal nations, Native Pride Dancers’ mission is to educate, inspire, and motivate through the beauty and power of Native American music and dance. The group’s founder and artistic director, Larry Yazzie, is a world-champion fancy dancer and member of the Meskwaki Nation.'
                      : 'Compuesto por miembros de varias naciones tribales, la misión de Native Pride Dancers es educar, inspirar y motivar a través de la belleza y el poder de la música y la danza de los Nativos Americanos. El fundador y director artístico del grupo, Larry Yazzie, es campeón mundial de fancy dance y miembro de la Nación Meskwaki.'}
                  </p>
                </div>
                <div className={classes.subSection}>
                  <img className={classes.subSectionImage} src={image2} />
                  <p className={classes.contentSectionDetails}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language
                        ? 'Miccosukee Fashion Show'
                        : 'Desfile de Moda Miccosukee'}
                    </span>
                    <br />
                    {language
                      ? 'Miccosukee seamstresses create vibrant patchwork designs inspired by elements of nature. These colorful garments were first created in the early 1900s as a way to express their heritage. Tribal members wear patchwork for daily activities as well as ceremonial events. The Miccosukee Fashion Show highlights the evolution of this art form as members walk the runway in elegantly-crafted patterns adorning skirts, capes, dresses, and jackets.'
                      : 'Las costureras Miccosukee crean vibrantes diseños de retazos de tela inspirados en elementos de la naturaleza. Estas coloridas prendas se crearon por primera vez a principios del siglo XX como una forma de expresar su herencia. Los miembros de la Tribu usan esta vestimenta para actividades diarias y eventos ceremoniales. El desfile de modas Miccosukee destaca la evolución de esta forma de arte a medida que los miembros caminan por la pasarela con patrones elegantemente elaborados que adornan faldas, capas, vestidos y chaquetas.'}
                  </p>
                </div>
                <div className={classes.subSectionLast}>
                  <img className={classes.subSectionImage} src={image1} />
                  <p className={classes.contentSectionDetails}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language
                        ? 'Alligator Demonstrations'
                        : 'Demostraciones de Lagartos'}
                    </span>
                    <br />
                    {language
                      ? 'Wrestling alligators was a form of survival, a hunting technique used by the Miccosukee when they first inhabited the Florida Everglades. Today, it has become a popular attraction that educates the public about these powerful reptiles that are an essential part of this unique ecosystem. Our alligator wrestlers will show you how they handle these wild creatures in a jaw-dropping performance that will have you on the edge of your seat!'
                      : 'La lucha con lagartos era una forma de supervivencia, una técnica de caza utilizada por los Miccosukee cuando habitaron por primera vez los Everglades de Florida. Hoy, se ha convertido en una atracción popular que educa al público sobre estos poderosos reptiles que son parte esencial de este ecosistema único. ¡Nuestros luchadores de caimanes le mostrarán cómo manejan a estas criaturas salvajes en una actuación asombrosa que lo tendrá al borde de su asiento!'}
                  </p>
                </div>
              </div>
            );
          },
        },
        {
          key: 3,
          p: () => {
            return (
              <div>
                {horizontalRule()}
                <div className={classes.disclaimer}>
                  <p className={classes.contentSectionDetailsDisclaimer}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language ? 'Experience Miccosukee:' : 'Eche un Vistazo:'}
                    </span>{' '}
                    <br />
                    {language
                      ? ' Golfing, adventure, relaxation? Check out our amazing'
                      : '¿Golf, aventura, relajación? Echa un vistazo a nuestros increíbles'}
                    <a
                      href="https://www.miccosukee.com/resortpackages"
                      target="_blank"
                    >
                      &nbsp;
                      <span
                        style={{
                          color: primary,
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          textDecoration: 'underline',
                        }}
                      >
                        {language ? 'Resort Packages' : 'Paquetes de Resort'}
                      </span>{' '}
                    </a>
                    {language
                      ? " that cater to whatever you're in the mood for."
                      : ' que se adaptan a lo que sea que le apetezca.'}
                  </p>
                  <p className={classes.contentSectionDetailsDisclaimer}>
                    <span style={{ fontWeight: 'bold' }}>
                      {language ? 'Upcoming Events' : 'Próximos eventos'}
                    </span>
                    <br />
                    {/*language
                      ? "Don't miss our Indian Arts & Crafts Festival coming in December 2022!"
                    : '¡No se pierda nuestro Indian Arts & Crafts Festival que se realizará en diciembre de 2022!'*/}
                    {/*<br />*/}
                    <a
                      href="https://miccosukee.us8.list-manage.com/subscribe?u=ae1406c9f991aa9c928c1fb38&id=2338c8fb67"
                      target="_blank"
                    >
                      <span
                        style={{
                          color: primary,
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          textDecoration: 'underline',
                        }}
                      >
                        {language ? 'Sign up HERE' : 'BOLETOS'}
                      </span>
                    </a>
                    {language
                      ? ' to be among the first to hear about special promotions and updates!'
                      : ' para enterarse de promociones especiales y actualizaciones.'}
                  </p>
                </div>
              </div>
            );
          },
        },
        /*
        {
          key: 4,
          p: () => {
            return (
              <div>
                
              </div>
            );
          },
        },
        */
      ],
    },
  ];

  const languageToggler = () => {
    return (
      <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
        <div style={{ display: 'inline-block' }}>
          <Button
            simple={language ? false : true}
            className={
              language
                ? headerClasses.languageTrue
                : headerClasses.languageFalse
            }
            //style={language ? languageTrue : languageFalse}
            onClick={!language ? toggleLanguage : null}
            color="danger"
            aria-pressed={language}
          >
            english
          </Button>
          <Button
            simple={!language ? false : true}
            className={
              !language
                ? headerClasses.languageTrue
                : headerClasses.languageFalse
            }
            //style={!language ? languageTrue : languageFalse}
            onClick={language ? toggleLanguage : null}
            color="danger"
            aria-pressed={!language}
          >
            español
          </Button>
        </div>
      </div>
    );
  };

  const header = () => {
    return (
      <div>
        <Hidden mdUp>
          <img style={{ width: '100%' }} src={heroImageMobile} />
        </Hidden>
        <Hidden smDown>
          <img style={{ width: '100%' }} src={heroImageDesktop} />
        </Hidden>
      </div>
    );
  };

  const horizontalRule = () => {
    return <hr className={classes.divider} />;
  };

  const renderContentSection = () => {
    const section = (content) => {
      const details = () => {
        return content.body.map((item) => {
          return <div key={item.key}>{item.p()}</div>;
        });
      };

      return (
        <div>
          <div className={classes.contentTextDiv}>
            <h2
              style={{ color: content.color }}
              className={classes.contentSectionHeader}
            >
              {content.title}
            </h2>
            {/* IF SUBHEADER EXISTS */}
            {content.subHeader ? (
              <p className={classes.contentSectionSubHeader}>
                {content.subHeader}
              </p>
            ) : null}
            {details()}
          </div>
        </div>
      );
    };

    return artsAndCraftsContent.map((item) => {
      return <div key={item.title}>{section(item)}</div>;
    });
  };

  const renderContent = () => {
    return (
      <div>
        {header()}
        <div className={classes.container} style={{ marginBottom: '20px' }}>
          <RaisedContainer>
            {languageToggler()}
            <div className={classes.contentSection}>
              {renderContentSection()}
            </div>
          </RaisedContainer>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderContent()}
      <Footer />
      <CustomContactModal
        language={language}
        showModal={showContactModal}
        closeModal={() => closeModal(setShowContactModal)}
        entity={mrgBusinessInfo}
      />
    </div>
  );
};

export default ArtsAndCrafts;