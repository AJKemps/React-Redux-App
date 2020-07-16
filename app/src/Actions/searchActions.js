import axios from "axios";

// export function search(searchTerm) {
//   return { type: "SEARCH", payload: searchTerm };
// }

const initialTerm = "the+lord+of+the+rings";

export const getBooks = (searchTerm = initialTerm) => (dispatch) => {
  dispatch({ type: "FETCHING_BOOK_START", payload: searchTerm });
  axios
    .get(`http://openlibrary.org/search.json?q=${searchTerm}`)
    .then((res) => {
      console.log("API RESPONSE:", res);
      dispatch({ type: "FETCHING_BOOK_SUCCESS", payload: res.data.docs });
    })
    .catch((err) => {
      console.log(err);
    });
};
