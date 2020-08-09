import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import GameDetails from "./pages/gameDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/GameDetails" component={GameDetails} />
      </Switch>
    </Router>
  );
};

export default App;
