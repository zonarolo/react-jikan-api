import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Jikan} from "./pages/Jikan/Jikan";
import {Menu} from "./shared/components/Menu/Menu";


function App() {
  return (
    <Router>
      <div className="container-fluid justify-content-center my-4 u-font-size-16">
        <Menu />
        <Switch>
          <Route path="/jikan">
            <Jikan />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
