import React, { useState, useEffect } from "react";

import data from "../service/data";

const Admin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    data.getAdminDisplay().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
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

export default Admin;