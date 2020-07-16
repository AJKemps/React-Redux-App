import React, { useState } from "react";

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState(props.searchTerm);

  const handleChanges = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText(searchText);
    props.props.getBooks(searchText);
  };

  console.log("SearchForm props:", props);

  return (
    <div className="searchForm">
      <form>
        <input
          type="search"
          placeholder="Search Here"
          value={searchText}
          onChange={handleChanges}
        />

        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
