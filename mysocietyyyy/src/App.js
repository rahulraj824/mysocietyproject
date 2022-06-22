import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contactform from "./components/Contactform";
import Addflat from "./components/Addflat";

// import Addflat from "./pages/Addflat";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addflat" component={Addflat} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/contactform" component={Contactform} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
