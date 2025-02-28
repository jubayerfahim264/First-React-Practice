import React from "react";
import "./App.css";
import MainComponent from "./Component/MainComponent";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
};
export default App;
