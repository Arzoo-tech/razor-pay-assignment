import React, { useState } from "react";
import Header from "./components/Header";
import CheckoutScreen from "./components/CheckoutScreen";
import "./App.css";

function App() {
  //States
  const [values, setValues] = useState([]);

  return (
    <div className="App">
      <Header />
      <CheckoutScreen values={values}  setValues={setValues}/>
    </div>
  );
}

export default App;
//here
