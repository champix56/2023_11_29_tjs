import React from "react";
import "./App.css";
import Footer from "./components/uis/Footer/Footer";
import Navbar from "./components/uis/Navbar/Navbar";
import Header from "./components/uis/Header/Header";
import FlexHGrow3 from "./components/layouts/FlexHGrow3/FlexHGrow3";
import FlexWGrow1 from "./components/layouts/FlexWGrow1/FlexWGrow1";
import MemeSvgViewer from "./components/uis/MemeSvgViewer/MemeSvgViewer.stored";
import { MemeFormHookConnected } from "./components/functionnal/MemeForm/MemeForm";
const App = () => {
  return (
      <div className="App" data-testid="App">
        <FlexHGrow3 style={{ height: "calc(100vh - 30px)" }}>
          <Header />
          <Navbar />
          <FlexWGrow1>
            <MemeSvgViewer />
            <MemeFormHookConnected />
          </FlexWGrow1>
          <Footer />
        </FlexHGrow3>
      </div>

  );
};

export default App;
