import React from "react";

import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr />
      <Button text="toto" type="button" />
      <Button text="tata" type="submit" />
      <Button model="primary" text="titi" type="reset" />
      <Button model="error" bgColor='tomato'
        text="titi"
        size={{
          margin: { bottom: "12px", right: "24px" },
          padding: { h: "10px", w: "20px" },
        }}
      />
    </div>
  );
}

export default App;
