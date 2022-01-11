import React, { useState, useEffect } from "react";

import data from "../service/data";
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    data.getPublicDisplay().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container p-3 my-3 bg-dark text-white">
      <header >
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;