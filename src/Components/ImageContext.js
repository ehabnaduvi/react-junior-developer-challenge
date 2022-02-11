import { useState, createContext } from "react";
import React from "react";
export const ImageContext = createContext();
export const ImageProvider = (props) => {
  const [image, setImage] = useState([]);
  return (
    <ImageContext.Provider value={[image, setImage]}>
      {props.children}
    </ImageContext.Provider>
  );
};
