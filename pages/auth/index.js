import React from 'react';
import Router from "next/router";
import User from "../../components/User";

const authIndexPage = (props) => {
  return (
      <div>
        <h1>The Auth Index Page</h1>
        <button onClick={() => Router.push('/')}>Go Back</button>
        <User name="João Víctor" age="21" code={props.code}/>
      </div>
  );
};

authIndexPage.getInitialProps = async () => new Promise(resolve => setTimeout(() => resolve({code: Math.floor(Math.random() * 1000)}), 2500));

export default authIndexPage;
