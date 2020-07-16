import React from "react";
import Result from "./Result";

const Results = (props) => {
  console.log("Results.js props:", props);

  if (props.results.isFetching) {
    return <h4>Loading . . .</h4>;
  }

  return (
    <div>
      <h3>Results</h3>
      {props.results.results.map((result) => (
        <Result key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
