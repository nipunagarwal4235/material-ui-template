import React, { useState } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setvalue] = useState(0);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            value={value}
            setvalue={setvalue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          ></Header>
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>}></Route>
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            ></Route>
            <Route
              exact
              path="/customsoftware"
              component={() => <div>Custom Software</div>}
            ></Route>
            <Route
              exact
              path="/mobileapps"
              component={() => <div>Mobile Apps</div>}
            ></Route>
            <Route
              exact
              path="/websites"
              component={() => <div>Websites</div>}
            ></Route>
            <Route
              exact
              path="/revolution"
              component={() => <div>Revolution</div>}
            ></Route>
            <Route
              exact
              path="/about"
              component={() => <div>About Us</div>}
            ></Route>
            <Route
              exact
              path="/contact"
              component={() => <div>Contact</div>}
            ></Route>
            <Route
              exact
              path="/estimate"
              component={() => <div>Estimate</div>}
            ></Route>
          </Switch>
          <Footer
            value={value}
            setvalue={setvalue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          ></Footer>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
