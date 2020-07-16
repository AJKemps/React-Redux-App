import React from "react";
import Result from "./Result";

const Results = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Results</h3>
      {props.results.map((result) => (
        <Result key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
