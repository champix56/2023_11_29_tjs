import React from "react";
import MemeSvgViewerConnected from "./MemeSvgViewer";
import { useSelector } from "react-redux";
export default function MemeSvgViewer() {
  const meme = useSelector((s) => s.current);
  const image = useSelector((s) =>
    s.ressources.images.find((i) => i.id === s.current.imageId)
  );
  return <MemeSvgViewerConnected meme={meme} image={image} />;
}
