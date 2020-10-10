import React from 'react';
import Router from "next/router";

const authIndexPage = () => {
  return (
      <div>
        <h1>The Auth Index Page</h1>
        <button onClick={() => Router.push('/')}>Go Back</button>
      </div>
  );
};

export default authIndexPage;
