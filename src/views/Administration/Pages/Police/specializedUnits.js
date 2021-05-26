import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/golf/courses/Golf_2.jpg";
import image2 from "assets/img/golf/courses/Golf_3-1.jpg";
import image3 from "assets/img/golf/courses/Golf_4.jpg";
import image4 from "assets/img/golf/courses/Golf_5-1.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3, image4];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const SpecializedUnits = () => {
  const classes = useStyles();

  const style = { fontWeight: "500" };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Specialized Units</h2>
              <p>
                <span style={style}>Color Guard</span>
                <br />
                The Color Guard team consists of 5-6 members (2 flag bearers, 2
                riflemen and a commander) who perform drill exhibitions or serve
                as escorts on ceremonial occasions such as memorials and
                funerals.
              </p>

              <p>
                <span style={style}>Wildlife</span>
                <br />
                Staff of the Miccosukee Fish and Wildlife Law Enforcement Unit
                is comprised of highly trained police officers with specialized
                skills in resource conservation. Utilizing airboats, helicopters
                and ATVs, the officers patrol nearly 300,000 acres of Tribal
                lands in six different counties to enforce federal, state, and
                tribal hunting and fishing laws.
              </p>

              <p>
                <span style={style}>Dive Team</span>
                <br />
                Miccosukee Dive Team serves the police department and the
                community by conducting rescue operations and searching the
                waterways within the Tribe’s jurisdiction to recover vehicles,
                weapons, persons, and criminal evidence.
              </p>

              <p>
                <span style={style}>K-9 Unit</span>
                <br />
                Police dogs are often referred to as “K-9s”, derived from the
                word “canine.” Utilizing highly trained police dogs, the
                Miccosukee Police Department is able to uncover criminal
                activity including evidence leading to arrests.
              </p>

              <p>
                <span style={style}>C.S.I. Unit</span>
                <br />
                Crime Scene Investigations Unit provides crime scene processing
                through the collection of physical evidence through photography,
                physical crime scene search, recovery of latent fingerprints,
                and the collection of physical evidence.
              </p>

              <p>
                <span style={style}>G.I.U.</span>
                <br />
                Detectives assigned to the General Investigations Unit (GIU) are
                responsible for investigating a variety of criminal activity.
                The division’s core objectives are to identify crime, solve
                criminal cases, and obtain convictions thereby enhancing the
                quality of life for the community, visitors, and the transient
                population traveling through the Tribe’s jurisdiction.
              </p>

              <p>
                <span style={style}>SWAT Team</span>
                <br />A SWAT (Special Weapons and Tactics) team is an elite
                paramilitary tactical unit that is trained to perform high-risk
                operations that fall outside of the abilities and/or
                capabilities of the standard officer. The main goal of the SWAT
                Team is to provide protection and safety for the community it
                serves and to help reduce the possibility of injuries or death
                at high-risk incidents.
              </p>

              <p>
                <span style={style}>School Resources Officer</span>
                <br />
                Programs under the supervision of this police officer, typically
                focus their functions on the “Triad Model” consisting of law
                enforcement, student counseling, and law-related education. The
                working relationship between the School Resources Officer and
                school-law enforcement relationships are the first line of
                prevention, with the primary goal of informing and educating
                teachers and students to reduce infractions of the law and
                arrests.
              </p>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default SpecializedUnits;
