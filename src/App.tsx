import React from "react";
import "./App.css";
import { WhiteMain, Chatting } from "./components";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={WhiteMain}/>
        <Route exact path="/chatting" component={Chatting}/>
      </BrowserRouter>
    </>
  );
}

export default App;
