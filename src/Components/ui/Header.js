import React from "react";
import { AppBar , Toolbar } from "@material-ui/core";
import useScrollTrigger from '@mui/material/useScrollTrigger';

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
  

export default function Header (props) 
{
    return (
        <ElevationScroll>
        <AppBar color='secondary'>
            <Toolbar>
                Arc Development
            </Toolbar>
        </AppBar>
        </ElevationScroll>
    )
}