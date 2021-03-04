import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Minneapolis from "./Minneapolis";
import StPaul from "./StPaul";
import About from "./About";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/minneapolis">
            <Minneapolis />
          </Route>
          <Route exact path="/st.paul">
            <StPaul />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
