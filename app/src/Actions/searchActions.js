import axios from "axios";

export function search(searchTerm) {
  return { type: "SEARCH", payload: searchTerm };
}

export const getBooks = () => (dispatch) => {
  dispatch({ type: "FETCHING_BOOK_START" });
  axios
    .get("http://openlibrary.org/search.json?q=the+lord+of+the+rings")
    .then((res) => {
      console.log("API RESPONSE:", res);
      dispatch({ type: "FETCHING_BOOK_SUCCESS", payload: res.data.docs });
    })
    .catch((err) => {
      console.log(err);
    });
};
