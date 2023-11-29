import React from 'react';

import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">DEMAT BREIZH
      <hr/>
      <Button text="toto" type="button"/>
      <Button text="tata" type="submit"/>
      <Button text="titi" type="reset"/>
      <Button text="titi"  />
    </div> 
  );
}

export default App;
