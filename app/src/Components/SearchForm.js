import React from "react";

const SearchForm = () => {
  return (
    <div className="searchForm">
      <form>
        <input type="search" placeholder="Search Here"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
