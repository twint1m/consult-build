import React from "react";
import {Outlet} from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
        <Form/>
        <Outlet/>
    </div>
  );
}

export default App;
