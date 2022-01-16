import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from '@material-ui/core/styles'

import logo from '../../assets/logo.svg'

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

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo :{
    height: '7em'
  }
}));

export default function Header(props) {
   const classes = useStyles();
  return (
    <>
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <img src={logo} alt='company logo' className={classes.logo}></img>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
     <div className={classes.toolbarMargin} />
    </>
  );
}
