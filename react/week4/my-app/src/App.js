import React from "react";
import GithubUserSearch from "./components/GithubUserSearch";

import "./App.css";
import RepoSearch from "./components/RepoSearch";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <GithubUserSearch />
      <hr /> <hr />
      <RepoSearch />
    </div>
  );
}

export default App;
