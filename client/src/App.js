import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";


function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Menu} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
