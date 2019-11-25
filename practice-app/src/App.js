import React from "react";
import { Route } from "react-router-dom";
import Houses from "./components/Houses";
import Characters from "./components/Characters";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/houses" component={Houses} />
      <Route path="/characters" component={Characters} />
    </div>
  );
}

export default App;
