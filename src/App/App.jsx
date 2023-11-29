import React from "react";

import "./App.css";
import Button from "./components/Button/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        valeur XX
        <hr />
        <Button text="ajouter 1" type="button" />
        <Button text="enlever 1" type="button" />
      </div>
    );
  }
}

export default App;
