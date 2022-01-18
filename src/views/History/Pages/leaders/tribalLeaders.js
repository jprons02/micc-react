import React, { useCallback, useState } from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/media/img/history/Header_Tribe_1500x354-e1551386527765.jpg";
import chairman from "assets/media/img/history/Chairman_TalbertCypress.jpg";
import asstChairman from "assets/media/img/history/AsstChairman_LucasOsceola.jpg";
import treasurer from "assets/media/img/history/Treasurer_KennyCypress.jpg";
import secretary from "assets/media/img/history/Secretary_WilliamJOsceola.jpg";
import lawmaker from "assets/media/img/history/imgLeadersPetties-no6sis5mu2iwh29e7uim87r4hdi3uclvpnfjkkis2o.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Context
import { useLanguage } from "contexts/languageContext";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const TribalLeaders = () => {
  const language = useLanguage();
  const classes = useStyles();

  const imageWithCaptions = [
    {
      src: chairman,
      caption: `Talbert Cypress, ${language ? "Chairman" : "Presidente"}`,
      alt: "Talbert Cypress, Chairman",
    },
    {
      src: asstChairman,
      caption: `Lucas K. Osceola, ${
        language ? "Assistant Chairman" : "Asistente del Presidente"
      }`,
      alt: "Lucas K. Osceola, Assistant Chairman",
    },
    {
      src: treasurer,
      caption: `Kenneth H. Cypress, ${language ? "Treasurer" : "Tesorero"}`,
      alt: "Kenneth H. Cypress, Treasurer",
    },
    {
      src: secretary,
      caption: `William J. Osceola, ${language ? "Secretary" : "Secretario"}`,
      alt: "William J. Osceola, Secretary",
    },
    {
      src: lawmaker,
      caption: `Petties Osceola, Jr., ${language ? "Lawmaker" : "Legislador"}`,
      alt: "Petties Osceola, Jr., Lawmaker",
    },
  ];

  const [activeCouncilman, setActiveCouncilman] = useState(0);

  const clickFunction = (getIndex) => {
    setActiveCouncilman(getIndex);
  };

  const renderBio = () => {
    switch (activeCouncilman) {
      case 0:
        return (
          <React.Fragment>
            <h3>Talbert Cypress, {language ? "Chairman" : "Presidente"}</h3>
            {language ? (
              <React.Fragment>
                <p>
                  Talbert Cypress has served in the Miccosukee Business Council
                  since 2017, first elected as Secretary and later becoming the
                  official Chairman of the Council in 2021. As the leader of the
                  Council, he oversees the day-to-day activities of the Tribal
                  government and its enterprises, coordinating members and
                  assigning their responsibilities, making sure they carry out
                  their duties. As the official representative of the Tribe, he
                  presides over all regular and special meetings and provides
                  support to community and Tribal members, putting their needs
                  and interests above all else.
                </p>
                <p>
                  Growing up in the Reservation, he is proud of his heritage and
                  looks to his ancestors for direction. “I come from a people
                  that fought and struggled to survive and I wouldn’t be here
                  without them”, said Cypress, acknowledging that his people are
                  thriving in modern society, with their language, culture, and
                  values intact.
                </p>
                <p>
                  A family man at heart, he loves spending time with his
                  daughters and parents, stating that they ground him to stay
                  humble and true to himself.
                </p>
                <p>
                  His main objective is to lead the Tribe in a new direction,
                  governing with a sense of pride and devotion to his nation. In
                  his own words, “The world is changing every day. We must catch
                  up with the world, not stand still and be left behind.”
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Talbert Cypress se ha desempeñado en el Consejo General
                  (Empresarial) Miccosukee desde 2017, primero siendo elegido
                  como Secretario y luego convirtiéndose en el Presidente
                  oficial del Consejo en 2021. Como líder del Consejo, supervisa
                  las actividades diarias del gobierno Tribal y su empresas,
                  coordinando a los miembros y asignando sus responsabilidades,
                  asegurándose de que cumplan con sus funciones. Como
                  representante oficial de la Tribu, preside todas las reuniones
                  regulares y especiales y brinda apoyo a los miembros de la
                  comunidad y de la Tribu, poniendo sus necesidades e intereses
                  por encima de todo.
                </p>
                <p>
                  Al crecer en la Reserva, está orgulloso de su herencia y se
                  guía por la sabiduría de sus antepasados. “Vengo de un pueblo
                  que luchó por sobrevivir y no estaría aquí sin ellos”, dijo
                  Cypress, reconociendo que su gente está prosperando en la
                  sociedad moderna, con su idioma, cultura y valores intactos.
                </p>
                <p>
                  Se considera un hombre de familia, y disfruta pasar tiempo con
                  sus hijas y padres, afirmando que lo ayudan a mantenerse
                  humilde y fiel a sí mismo.
                </p>
                <p>
                  Su principal objetivo es llevar a la Tribu en una nueva
                  dirección, gobernando con orgullo y devoción a su nación. En
                  sus propias palabras, “El mundo cambia todos los días. Debemos
                  ponernos al día con el mundo, no quedarnos quietos y
                  excluídos."
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <h3>Lucas K. Osceola, Assistant Chairman</h3>
            {language ? (
              <React.Fragment>
                <p>
                  The responsibilities of the General Council consist of the
                  development and management of resources and the day-to-day
                  business activities of the Tribe including those involving
                  membership, government, law and order, education, welfare,
                  recreation, and fiscal disbursement. This group is also known
                  as the Business Council. It is a combination of traditional
                  tribal government and modern management that forms the
                  organizational structure of the present-day Miccosukee Tribe.​
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Las responsabilidades del Consejo General consisten en el
                  desarrollo y administración de recursos y actividades
                  comerciales diarias de la Tribu, incluyendo las que involucran
                  membresía, gobierno, ley y orden, educación, bienestar,
                  recreación y desembolso fiscal. Este grupo también se conoce
                  como Consejo Empresarial. Es una combinación de gobierno
                  tribal tradicional y administración moderna que forma la
                  estructura organizativa de la actual Tribu Miccosukee.​
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <h3>Kenneth H. Cypress, {language ? "Treasurer" : "Tesorero"}</h3>
            {language ? (
              <React.Fragment>
                <p>
                  Kenneth Cypress was Interim Treasurer in 2020 and became the
                  official Treasurer of the Miccosukee Tribe’s Business Council
                  in 2021. He grew up around Council meetings since his parents
                  both worked in office, and knew what to expect as an elected
                  official. “I came in to work hard for the people, to keep an
                  eye on finances and bring in more money”, expressed Cypress.
                  He manages the finances for the Tribe’s enterprises, including
                  the airboats, gas station and general store, service plaza,
                  and Miccosukee Resort &amp; Gaming.
                </p>
                <p>
                  Belonging to the Bird Clan and growing up in the Reservation,
                  he remembers building chickees when he was 12 years old. He is
                  half Miccosukee; his mother is full-blooded Miccosukee and his
                  father is of German and Spanish descent. His love for animals
                  is evident, and his six dogs are his pride and joy. One of his
                  projects is to build an animal shelter in the Reservation.
                </p>
                <p>
                  As Treasurer, he plans on gathering funds to complete the
                  construction of the community building and hospital. “We came
                  a long way to get where we are. Our priority is to teach young
                  folks to be future leaders”, he said with a gentle smile, a
                  statement of his humble beginnings and progress.
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Kenneth Cypress fue Tesorero Interino en 2020 y se convirtió
                  en Tesorero oficial del Consejo General (Empresarial) de la
                  Tribu Miccosukee en 2021. Creció asistiendo a reuniones del
                  Consejo, ya que sus padres trabajaban en las oficinas; sabía
                  qué esperar como funcionario electo. “Vine para trabajar duro
                  por la gente, para vigilar las finanzas y traer más dinero”,
                  expresó Cypress. Maneja las finanzas de las empresas de la
                  Tribu, incluyendo los airboats (hidrodeslizadores), la
                  gasolinera y tienda general, la plaza de servicio y Miccosukee
                  Resort &amp; Gaming.
                </p>
                <p>
                  Perteneciente al Clan de los Pájaros y criado en la Reserva,
                  recuerda haber construido chickees cuando tenía 12 años. Es
                  mitad Miccosukee; su madre es Miccosukee y su padre es de
                  ascendencia alemana y española. Su amor por los animales es
                  evidente y sus seis perros son su orgullo y alegría. Uno de
                  sus proyectos es construir un refugio para animales en la
                  Reserva.
                </p>
                <p>
                  Como Tesorero, planea reunir fondos para completar la
                  construcción del edificio comunitario y el hospital.
                  “Recorrimos un largo camino para llegar a donde estamos.
                  Nuestra prioridad es enseñar a los jóvenes a ser futuros
                  líderes”, dijo con una suave sonrisa, una declaración de sus
                  humildes comienzos y progreso.
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <h3>William J. Osceola, {language ? "Secretary" : "Secretario"}</h3>
            {language ? (
              <React.Fragment>
                <p>
                  William J. Osceola taught language, culture, and digital arts
                  at the Miccosukee Indian School before he was elected
                  Secretary of the Miccosukee Business Council in 2021. In his
                  early thirties, he is the Council’s youngest member, balancing
                  tradition and modernity with a creative flair. “Buffalo Tiger
                  was very young when he first became Chairman. I am continuing
                  a legacy that started before I was here”, he expressed
                  confidently, knowing that the future of the Tribe lies in
                  educating the young and following in his ancestors' footsteps.
                </p>
                <p>
                  As Secretary, he is in charge of all aspects of communication
                  within the Tribe, including recordkeeping, handling
                  correspondence, publishing notices about meetings and events,
                  and keeping track of Tribal membership. Some of his goals
                  include shaping future leaders by placing an emphasis on
                  education, increasing community involvement, and investing in
                  infrastructure to improve roads, sidewalks, and important
                  buildings within the Reservation.
                </p>
                <p>
                  He was born in Florida and raised in different camps inside
                  the Reservation; when he was 5 years old, his family moved to
                  Connecticut. Living there for 7 years gave him an in-depth
                  perspective on the outside world and increased his
                  appreciation for his Tribal community. “We are still here. We
                  are still vital people to the ecology, economy, and everything
                  around us. We are very resilient people”, he stated with
                  optimism, knowing his work will make a difference.
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  William J. Osceola enseñó lenguaje, cultura y artes digitales
                  en la Escuela Miccosukee antes de ser elegido secretario del
                  Consejo General (Empresarial) de la Tribu Miccosukee en 2021.
                  Con poco más de treinta años, es el miembro más joven del
                  Consejo, equilibrando la tradición y la modernidad con un
                  toque creativo. “Buffalo Tiger era muy joven cuando asumió el
                  cargo de Presidente. Continúo un legado que comenzó antes de
                  que yo estuviera aquí ”, expresó con seguridad, sabiendo que
                  el futuro de la Tribu está en educar a los jóvenes y seguir
                  los pasos de sus antepasados.
                </p>
                <p>
                  Como Secretario, está a cargo de todos los aspectos de la
                  comunicación dentro de la Tribu, incluido el mantenimiento de
                  registros, el manejo de la correspondencia, la publicación de
                  avisos sobre reuniones y eventos y el seguimiento de la
                  membresía Tribal. Algunas de sus metas incluyen dar forma a
                  los futuros líderes poniendo énfasis en la educación,
                  aumentando la participación de la comunidad e invirtiendo en
                  infraestructura para mejorar carreteras, aceras y edificios
                  importantes dentro de la Reserva.
                </p>
                <p>
                  Nació en Florida y se crió en diferentes campamentos dentro de
                  la Reserva; cuando tenía 5 años, su familia se mudó a
                  Connecticut. Vivir allí durante 7 años le dio una perspectiva
                  profunda del mundo exterior y aumentó su aprecio por su
                  comunidad Tribal. "Todavía estamos aquí. Seguimos siendo
                  personas vitales para la ecología, la economía y todo lo que
                  nos rodea. Somos personas muy resilientes”, afirmó con
                  optimismo, sabiendo que su trabajo marcará la diferencia.
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <h3>
              Petties Osceola, Jr., {language ? "Lawmaker" : "Legislador"}
            </h3>
            {language ? (
              <React.Fragment>
                <p>
                  Petties Osceola, Jr. joined the Miccosukee Business Council in
                  2017 and is currently serving his second term as Lawmaker.
                  With a humble and wise demeanor, he recalls a profound
                  experience during his childhood that would forever impact his
                  life’s direction: “My grandmother took us through the woods
                  and told us to sit and remain quiet. I asked her why we were
                  there when strangers came, and she said, ‘I love you and want
                  to make sure you stay who you are and never lose your way.' ”
                  Belonging to a matriarchal society, the words of his
                  grandmother Sally Tiger would resonate throughout his life,
                  teaching him the importance of preserving his culture and
                  traditions, instilling in him a need to lead by example.
                </p>
                <p>
                  Conforming to the Constitution of the Miccosukee Nation, his
                  role as Lawmaker is to ensure peace and order during meetings,
                  guaranteeing that everyone is respected and their voices are
                  heard. He also oversees the Tribal police department and plans
                  on building a modern facility to include a helipad should
                  emergencies arise.
                </p>
                <p>
                  He has fond memories of being raised as a member of the Bird
                  Clan in Musa Isle along the Miami River, a camp founded in the
                  early 1900s by his great grandfather Charlie Willie that later
                  became an important tourist destination. His community would
                  make spears to hunt gators, frogs, and turtles. Although they
                  didn’t have many resources, he agrees that they overcame
                  challenges to succeed in life.
                </p>
                <p>
                  An innate leader, he attended Miami Dade College and Florida
                  International University to pursue a degree in Business
                  Management. Still, his most valuable education was learning
                  his native language and customs from his mother, Mary Tiger
                  Osceola, and his late father, Pete Osceola, Senior. As an
                  entrepreneur, he developed a chickee construction company and
                  managed a gift shop, airboat rides, a hotel, and other real
                  estate assets.
                </p>
                <p>
                  He believes that today, the main goal of his people is to
                  maintain their essence and conserve the Everglades. “The
                  elders were the medicine people; they wanted to protect their
                  way of life and preserve their sovereignty, rights, and
                  voices, to make sure to not die away in the wind. If we don’t
                  protect our homeland, no one else will.”
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Petties Osceola, Jr. se unió al Consejo General (Empresarial)
                  Miccosukee en 2017 y actualmente cumple su segundo mandato
                  como legislador. Con una actitud humilde y sabia, recuerda una
                  experiencia profunda durante su infancia que marcaría para
                  siempre el rumbo de su vida: “Mi abuela nos llevó por el
                  bosque y nos dijo que nos sentáramos y nos quedáramos quietos.
                  Le pregunté por qué estábamos allí cuando llegaron extraños, y
                  ella dijo: 'Te amo y quiero asegurarme de que sigas siendo
                  quien eres y nunca pierdas tu camino.’ ” Perteneciente a una
                  sociedad matriarcal, las palabras de su abuela Sally Tiger
                  resonarían a lo largo de su vida, enseñándole la importancia
                  de preservar su cultura y tradiciones, inculcándole la
                  necesidad de predicar con el ejemplo.
                </p>
                <p>
                  Conforme a la Constitución de la Nación Miccosukee, su función
                  como legislador es asegurar la paz y el orden durante las
                  reuniones, garantizando que todos sean respetados y sus voces
                  escuchadas. También supervisa el departamento de policía
                  Tribal y planea construir una instalación moderna para incluir
                  un helipuerto en caso de que surjan emergencias.
                </p>
                <p>
                  Tiene buenos recuerdos de haber sido criado como miembro del
                  Clan de los Pájaros en Musa Isle a lo largo del río Miami, un
                  campamento fundado a principios del siglo XX por su bisabuelo
                  Charlie Willie que luego se convirtió en un importante destino
                  turístico. Su comunidad fabricaba lanzas para cazar caimanes,
                  ranas y tortugas. Aunque no tenían muchos recursos, está de
                  acuerdo en que superaron los desafíos para triunfar en la
                  vida.
                </p>
                <p>
                  Un líder innato, asistió a Miami Dade College y Florida
                  International University para obtener una licenciatura en
                  Administración de Empresas. Aún así, su educación más valiosa
                  fue aprender su idioma nativo y las costumbres de su madre,
                  Mary Tiger Osceola, y su difunto padre, Pete Osceola, Senior.
                  Como empresario, desarrolló un negocio de construcción de
                  chickees y administró una tienda de regalos, paseos en
                  hidrodeslizador, un hotel y otros activos inmobiliarios.
                </p>
                <p>
                  Él cree que hoy, el principal objetivo de su gente es mantener
                  su esencia y conservar los Everglades. “Los ancianos eran los
                  curanderos; querían proteger su forma de vida y preservar su
                  soberanía, derechos y voces, para asegurarse de no morir en el
                  viento. Si no protegemos nuestra patria, nadie más lo hará”.
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <span> </span>
          </React.Fragment>
        );
    }
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Tribal Leaders" : "Líderes Tribales"}</h2>
              {language ? (
                <React.Fragment>
                  <p>
                    The responsibilities of the General Council consist of the
                    development and management of resources and the day-to-day
                    business activities of the Tribe including those involving
                    membership, government, law and order, education, welfare,
                    recreation, and fiscal disbursement. This group is also
                    known as the Business Council. It is a combination of
                    traditional tribal government and modern management that
                    forms the organizational structure of the present-day
                    Miccosukee Tribe.​
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>
                    Las responsabilidades del Consejo General consisten en el
                    desarrollo y administración de recursos y actividades
                    comerciales diarias de la Tribu, incluyendo las que
                    involucran membresía, gobierno, ley y orden, educación,
                    bienestar, recreación y desembolso fiscal. Este grupo
                    también se conoce como Consejo Empresarial. Es una
                    combinación de gobierno tribal tradicional y administración
                    moderna que forma la estructura organizativa de la actual
                    Tribu Miccosukee.​
                  </p>
                </React.Fragment>
              )}
              {/*renderBio()*/}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider
                customStyle={{ width: "200px" }}
                customImages={imageWithCaptions}
                clickFunction={clickFunction}
              />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default TribalLeaders;
