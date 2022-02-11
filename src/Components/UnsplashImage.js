import React from "react";
import { useContext } from "react";
import { ImageContext } from "./ImageContext";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MainWarpper, Img } from "./styled";

const UnsplashImage = ({ data }) => {
  const [image, setImage] = useContext(ImageContext);
  return (
    <>
      <MainWarpper>
        {data.map((value) => {
          return (
            <div key={value.id}>
              <Link to="/photos">
                <Img src={value.urls.regular} onClick={() => setImage(value)} />
              </Link>
            </div>
          );
        })}
      </MainWarpper>
    </>
  );
};
export default UnsplashImage;
