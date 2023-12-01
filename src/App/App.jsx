import React from "react";
import "./App.css";
import Footer from "./components/uis/Footer/Footer";
import Navbar from "./components/uis/Navbar/Navbar";
import Header from "./components/uis/Header/Header";
import FlexHGrow3 from "./components/layouts/FlexHGrow3/FlexHGrow3";
import Editor from './pages/Editor'
import {
  Routes, Route
} from 'react-router-dom'
import Thumbnail from "./pages/Thumbnail";
 

const App = () => {
  return (
      <div className="App" data-testid="App">
        <FlexHGrow3 style={{ height: "calc(100vh - 30px)" }}>
          <Header />
          <Navbar />
         {/* zone router de l'app */}
         <Routes>
            <Route path="/" element={<div>Hello meme generator ...</div>}></Route>
            <Route path="/thumbnail" element={<Thumbnail/>}></Route>
            <Route path="/new" element={<Editor/>}></Route>
            <Route path="/editor/:id" element={<Editor/>}></Route>
          </Routes>
          <Footer />
        </FlexHGrow3>
      </div>

  );
};

export default App;
