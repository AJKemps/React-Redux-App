import React from "react";

const Result = (props) => {
  console.log("Result.js props:", props);

  return (
    <div className="resultCard">
      <h4>{props.result.title}</h4>
      <h5>{props.result.author}</h5>
    </div>
  );
};

export default Result;
