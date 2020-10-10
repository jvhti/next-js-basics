import React from 'react';

const user = (props) => {
  return (
      <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Code: {props.code}</p>
        <style jsx>{`
          div{
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 20px;
            margin: 10px 0;
            text-align: center;
          }
        `}</style>
      </div>
  );
};

export default user;
