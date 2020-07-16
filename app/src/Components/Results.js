import React, { useEffect } from "react";
import Result from "./Result";

const Results = (props) => {
  console.log("Results.js props:", props);

  useEffect(() => {
    props.results.getBooks();
  }, []);

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
