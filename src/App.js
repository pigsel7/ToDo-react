import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";

function App() {

  
  return (
      <AlertState>
          <BrowserRouter>
              <Navbar />
              <div className="container pt-4">
                  <Alert />
                  <Switch>
                      <Route path={"/"} exact component={Home} />
                      <Route path={"/about"} exact component={About} />
                  </Switch>
              </div>
          </BrowserRouter>
      </AlertState> 
  );
}

export default App;
