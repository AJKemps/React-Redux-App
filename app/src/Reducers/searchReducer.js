const initialState = {
  searchTerm: "swag",
  editing: false,
  results: [{ id: new Date(), title: "Test Title", author: "JK Rowling" }],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      console.log("Search Reached :)");
      return {
        ...state,
      };

    default:
      return state;
  }
};
