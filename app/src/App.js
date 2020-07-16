import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { search } from "./Actions/searchActions";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">Book Searcher</header>
      <SearchForm
        searchTerm={props.searchTerm}
        search={props.search}
      ></SearchForm>
      <Results results={props.results}></Results>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    editing: state.editing,
    results: state.results,
  };
};

export default connect(mapStateToProps, { search })(App);
