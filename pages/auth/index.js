import React from 'react';
import Router from "next/router";
import User from "../../components/User";

const authIndexPage = () => {
  return (
      <div>
        <h1>The Auth Index Page</h1>
        <button onClick={() => Router.push('/')}>Go Back</button>
        <User name="João Víctor" age="21"/>
      </div>
  );
};

export default authIndexPage;
