const initialState = {
  searchTerm: "swag",
  editing: false,
  loading: false,
  isFetching: false,
  error: false,
  results: [{ id: new Date(), title: "Test Title", author: "JK Rowling" }],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      console.log("Search Reached :)");
      return {
        ...state,
      };

    case "FETCHING_BOOK_START":
      return {
        ...state,
        isFetching: true,
        error: "",
      };

    case "FETCHING_BOOK_SUCCESS":
      console.log("FETCH SUCCESS REACHED:", action.payload);
      return {
        ...state,
        isFetching: false,
        results: action.payload
          .filter((i, index) => index < 10)
          .map((result) => ({
            id: new Date(),
            title: result.title,
            author: result.author_name,
          })),
      };

    default:
      return state;
  }
};
