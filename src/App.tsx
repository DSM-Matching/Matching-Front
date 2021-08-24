import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Chatting, DarkMain } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Route path="/dark" component={DarkMain} exact />
      <Route path="/dark/chatting" component={Chatting} exact />
    </BrowserRouter>
  );
}

export default App;
