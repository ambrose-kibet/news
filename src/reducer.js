import {
  REMOVE_STORY,
  SET_LOADING,
  SET_PAGE,
  SET_SEARCH,
  SET_STORIES,
} from "./actions";
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        stories: action.payload.stories,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case REMOVE_STORY:
      return {
        ...state,
        stories: state.stories.filter(
          (story) => story.objectID !== action.payload
        ),
      };
    case SET_PAGE:
      let newpage = state.page;
      if (action.payload === "inc") {
        newpage += 1;
        if (newpage > state.nbPages - 1) {
          newpage = 0;
        }
      }
      if (action.payload === "dec") {
        newpage -= 1;
        if (newpage < 0) {
          newpage = state.nbPages - 1;
        }
      }

      return { ...state, page: newpage };
    case SET_SEARCH:
      return { ...state, query: action.payload };
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};
export default reducer;
