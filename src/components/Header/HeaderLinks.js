/*eslint-disable*/
import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link, useRouteMatch } from 'react-router-dom';
// Hashlink used to move to # id within a page
import { NavHashLink } from 'react-router-hash-link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';
import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  let match = useRouteMatch();
  const classes = useStyles();

  // For scrolling to #id, offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  //remove trailing slash to avoid double //. such as /mrg//accommodations.
  const getBaseUrl = () => {
    const regex = /([a-z])+\//;
    if (regex.test(match.url)) {
      return match.url.slice(0, -1);
    } else {
      return match.url;
    }
  };

  //console.log('getbaseurl(): ', getBaseUrl());

  //Material ui kit needs an array. Cycle through the submenu object and return a new array.
  const renderDropDownItems = (originalArr) => {
    if (originalArr.subMenu == false) {
      return (
        <Link to="/" className={classes.dropdownLink}>
          TESTING
        </Link>
      );
    }
    let arrayOfItems = [];
    for (let i = 0; i < originalArr.length; i++) {
      if (originalArr[i]['target'] === '_blank') {
        arrayOfItems.push(
          <React.Fragment>
            <a
              href={originalArr[i]['link']}
              target={originalArr[i]['target']}
              className={classes.dropdownLink}
            >
              {originalArr[i]['text']}
            </a>
          </React.Fragment>
        );
      } else {
        arrayOfItems.push(
          <React.Fragment>
            <Link
              to={`${getBaseUrl()}${originalArr[i]['link']}`}
              className={classes.dropdownLink}
            >
              {originalArr[i]['text']}
            </Link>
          </React.Fragment>
        );
      }
      // add divider after element is pushed to array
      if (originalArr[i]['divider']) {
        arrayOfItems.push({ divider: originalArr[i]['divider'] });
      }
    }
    return arrayOfItems;
  };

  const renderLists = () => {
    //map through number of props.text and create ListItems for each
    /* EXAMPLE OF PROVIDED HEADERLINKS PROPS 
    const headerLinkArray = [
      {
        text: "GO BACK",
        color: "transparent",
        icon: () => <i className={classes.socialIcons + " fab fa-twitter"} />,
        //onClick: () => props.click("/"),
        //onClick: () => window.open("https://google.com", "_self"),
      },
    ];
  */
    return props.menuItems.map((menuItem) => {
      // if menu item link is external
      if (menuItem.itemType === 'external') {
        return (
          <ListItem key={menuItem.text} className={classes.listItem}>
            <Button
              target={menuItem.target}
              href={menuItem.href}
              className={classes.navLink}
              color={'transparent' || menuItem.color}
            >
              {menuItem.icon ? menuItem.icon() : ''}
              {menuItem.text}
            </Button>
          </ListItem>
        );
      }
      // if action menu item - ex) BOOK A ROOM button
      else if (menuItem.itemType === 'action') {
        return (
          <ListItem
            key={menuItem.text}
            className={classes.listItemActionButton}
          >
            <Button
              onClick={menuItem.clickFunction ? menuItem.clickFunction : null}
              usetheme="contained"
              className={classes.registerNavLink}
              round={true}
            >
              {menuItem.icon ? menuItem.icon() : ''}
              {menuItem.text}
            </Button>
          </ListItem>
        );
      }
      // if dropdown menu item
      else if (menuItem.itemType === 'dropdown') {
        return (
          <ListItem key={menuItem.text} className={classes.listItem}>
            <CustomDropdown
              hoverColor="black"
              noLiPadding
              buttonText={menuItem.text}
              buttonProps={{
                className: classes.navLink,
                color: 'transparent',
              }}
              dropdownList={renderDropDownItems(menuItem.subMenu)}
            />
          </ListItem>
        );
      }
      // If you want to link to id
      else if (menuItem.itemType === 'id') {
        return (
          <ListItem key={menuItem.text} className={classes.listItem}>
            <NavHashLink
              scroll={(el) => scrollWithOffset(el)}
              smooth
              style={{ padding: '0px', color: 'inherit' }}
              to={`${getBaseUrl()}${menuItem.link}` || '#'}
            >
              <Button
                className={classes.navLink}
                color={'transparent' || menuItem.color}
              >
                {menuItem.icon ? menuItem.icon() : ''}
                {menuItem.text}
              </Button>
            </NavHashLink>
          </ListItem>
        );
      }
      // if standard menu item but has click function
      else if (menuItem.link === '') {
        return (
          <ListItem key={menuItem.text} className={classes.listItem}>
            <Button
              onClick={menuItem.clickFunction ? menuItem.clickFunction : null}
              className={classes.navLink}
              color={'transparent' || menuItem.color}
            >
              {menuItem.icon ? menuItem.icon() : ''}
              {menuItem.text}
            </Button>
          </ListItem>
        );
      } else {
        return (
          <ListItem key={menuItem.text} className={classes.listItem}>
            <Link
              style={{ padding: '0px', color: 'inherit' }}
              to={`${getBaseUrl()}${menuItem.link}` || '#'}
            >
              <Button
                className={classes.navLink}
                color={'transparent' || menuItem.color}
              >
                {menuItem.icon ? menuItem.icon() : ''}
                {menuItem.text}
              </Button>
            </Link>
          </ListItem>
        );
      }
    });
  };

  const renderDemoLists = () => {
    return (
      <div>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Components"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                All components
              </Link>,
              <a
                href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                target="_blank"
                className={classes.dropdownLink}
              >
                Documentation
              </a>,
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href={props.href || 'https://google.com'}
            color={props.color || 'transparent'}
            target={props.target || ''}
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} />
            Demo Link
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-twitter'} />
              {props.text ? props.text[1] : 'Demo Link'}
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-facebook'} />
              &nbsp;Facebook
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-instagram'} />
              &nbsp;Instagram
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItemActionButton}>
          <Button
            usetheme="contained"
            href={props.href || 'https://google.com'}
            //color={props.color || "transparent"}
            color={props.color || 'primary'}
            target={props.target || ''}
            className={classes.registerNavLink}
            round={true}
            //fullWidth={true}
          >
            BOOK A ROOM
          </Button>
        </ListItem>
      </div>
    );
  };

  return (
    <List className={classes.list}>
      {props.menuItems ? renderLists() : renderDemoLists()}
    </List>
  );
}
