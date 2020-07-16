const initialState = {
  title: "blank",
  editing: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
      };

    default:
      return state;
  }
};
