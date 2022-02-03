import { createTheme } from "@mui/material/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      color: "white",
    },
    h2:{
      fontFamily: "Raleway",
      fontWeight:700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5 
    }
  },
});
