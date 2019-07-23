import React from "react";
import Home from "./components/Home";
import Produtos from "./components/Produtos";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Produtos} />
      </Router>
    </div>
  );
}

export default App;
