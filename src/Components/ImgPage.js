import React from "react";
import { useContext } from "react";
import { ImageContext } from "./ImageContext";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import { WrapperImages, Img } from "./styled";

const ImgPage = () => {
  const [image, setimage] = useContext(ImageContext);

  return (
    <WrapperImages>
      <Img src={image.urls.regular}></Img>

      <Card>
        <Card.Img
          src={image.urls.regular}
          variant="top"
          style={{
            width: "70%",
            height: "40%",
            margin: "2rem auto",
            display: "block",
            objectFit: "cover",
          }}
        />
        <Card.Body class="text-center">
          <Card.Title as="div">
            <strong class="text-info">Photo Info</strong>
          </Card.Title>
          <Card.Text>Photo Description : {image.description}</Card.Text>
          <Card.Text as="p">Photo ID: {image.id}</Card.Text>
          <Card.Text as="p">Created_at : {image.created_at}</Card.Text>
          <Card.Text as="p">Likes : {image.likes}</Card.Text>
          <Link to="/">
            <Button class="text-center py-3">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </WrapperImages>
  );
};
export default ImgPage;
