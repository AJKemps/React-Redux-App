import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getBooks } from "./Actions/searchActions";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">Book Searcher</header>
      <SearchForm searchTerm={props.searchTerm} props={props}></SearchForm>
      <Results results={props}></Results>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    loading: state.loading,
    editing: state.editing,
    isFetching: state.isFetching,
    error: state.error,
    results: state.results,
  };
};

export default connect(mapStateToProps, { getBooks })(App);
