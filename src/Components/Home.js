import React from "react";
import UseFetch from "./UseFetch";
import UnsplashImage from "./UnsplashImage";
import Message from "./Message";

import Loader from "./Loader";
require("dotenv").config();

const Home = () => {
  const API_KEY = process.env.REACT_APP_ACCESSKEY;

  const url = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=12`;
  const { isLoading, badRequest, hasError, data } = UseFetch(url);

  return (
    <>
      {isLoading && !hasError && <Loader />}

      {badRequest && !hasError && <Message> Bad Request </Message>}
      {hasError && !isLoading && (
        <Message>Somthing went wrong with the server </Message>
      )}

      {data && <UnsplashImage data={data} />}
    </>
  );
};

export default Home;
