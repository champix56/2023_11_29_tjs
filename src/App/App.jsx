import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/uis/Footer/Footer";
import Navbar from "./components/uis/Navbar/Navbar";
import Header from "./components/uis/Header/Header";
import FlexHGrow3 from "./components/layouts/FlexHGrow3/FlexHGrow3";
import FlexWGrow1 from "./components/layouts/FlexWGrow1/FlexWGrow1";
import MemeSvgViewer from "./components/uis/MemeSvgViewer/MemeSvgViewer";
import MemeForm from "./components/functionnal/MemeForm/MemeForm";
import { emptyMeme } from "orsys-tjs-meme";
import { RESSOURCES_NAME, REST_ADR } from "./config/config";
const App = () => {
  const [current, setcurrent] = useState(emptyMeme);
  const [images, setimages] = useState([]);
  useEffect(() => {
   fetch(`${REST_ADR}${RESSOURCES_NAME.images}`).then(r=>r.json()).then(arr=>setimages(arr));
  }, [])
  return (
    <>
      {JSON.stringify(current)}
      <div className="App" data-testid="App">
        <FlexHGrow3 style={{ height: "calc(100vh - 30px)" }}>
          <Header />
          <Navbar />
          <FlexWGrow1>
            <MemeSvgViewer meme={current} image={images.find(img=>img.id===current.imageId)}/>
            <MemeForm meme={current} onMemeChange={meme=>{
              setcurrent({...current,...meme})
            }} 
            images={images}
            />
          </FlexWGrow1>
          <Footer />
        </FlexHGrow3>
      </div>
    </>
  );
};

export default App;
