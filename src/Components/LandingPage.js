import React from "react";
import Lottie from "lottie-react";
// import { useLottie } from "lottie-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";
import { Typography } from "@material-ui/core";

import animationData from "../animations/landinganimation/data";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  // const options = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  // const { Animation }= useLottie(options);

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
      {/* -------------Hero Block-------------- */}
        <Grid item>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item>
              <Typography
                align="center"
                variant="h2"
                className={classes.heroTextContainer}
              >
                Bringing West Coast Technology <br></br> to the MidWest
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>

                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              {/* <Lottie
                options={defaultOptions}
                height={"100%"}
                width={"100%"}
              ></Lottie> */}
              <Lottie animationData={animationData} />;
            </Grid>
          </Grid>
        </Grid>
        {/* ----------------- Services Block ------------------------------ */}
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Typography variant="h4" > Custom Software Development </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
