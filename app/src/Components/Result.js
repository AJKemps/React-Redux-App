import React, { useEffect } from "react";

const Result = (props) => {
  console.log("Result.js props:", props);

  //   if (props.isFetching) {
  //     return <h4>Loading . . .</h4>;
  //   }

  return (
    <div>
      <h4>{props.result.title}</h4>
      <h5>{props.result.author}</h5>
    </div>
  );
};

export default Result;
