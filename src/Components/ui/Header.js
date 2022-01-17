import React, { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setvalue] = useState(0);

  const handleChange = (e, value) => {
    setvalue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setvalue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setvalue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setvalue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setvalue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setvalue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setvalue(5);
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setvalue[0]}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo}></img>
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                component={Link}
                to="/"
                className={classes.tab}
                label="Home"
              ></Tab>
              <Tab
                component={Link}
                to="/services"
                className={classes.tab}
                label="Services"
              ></Tab>
              <Tab
                component={Link}
                to="/revolution"
                className={classes.tab}
                label="The Revolution"
              ></Tab>
              <Tab
                component={Link}
                to="/about"
                className={classes.tab}
                label="About Us"
              ></Tab>
              <Tab
                component={Link}
                to="/contact"
                className={classes.tab}
                label="Contact Us"
              ></Tab>
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
