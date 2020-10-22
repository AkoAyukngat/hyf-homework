import React from "react";
import GithubUserSearch from "./components/GithubUserSearch";

import OrgRepoSearch from "./components/OrgRepoSearch";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App_container">
      <div className="nav_wrap">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={GithubUserSearch} />
            <Route
              path="/GitHub Organisation Search"
              component={OrgRepoSearch}
            />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
