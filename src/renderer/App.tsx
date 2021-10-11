import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import "./App.global.css";
import BMICalculator from "./sheets/BMICalculator";

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" component={BMICalculator} />
      </Switch>
    </Router>
  );
}
