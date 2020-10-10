import React from 'react';
import Link from "next/link";

const errorPage = () => {
  return (
      <div>
        <h1>Oops, something when wrong</h1>
        <p>Try <Link href="/">going back</Link>.</p>
      </div>
  );
};

export default errorPage;
