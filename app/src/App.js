import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { search } from "./Actions/index";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">Book Searcher</header>
      <SearchForm></SearchForm>
      <Results></Results>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: "",
    editing: "",
  };
};

export default connect(mapStateToProps, { search })(App);
