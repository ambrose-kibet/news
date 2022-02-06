import { useEffect, useReducer, useContext } from "react";
import {
  SET_LOADING,
  SET_PAGE,
  SET_STORIES,
  SET_SEARCH,
  REMOVE_STORY,
} from "./actions";
import React from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const url = "http://hn.algolia.com/api/v1/search?query=";
const initialState = {
  isLoading: false,
  stories: [],
  page: 0,
  nbPages: 0,
  query: "React",
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getStories = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(`${url}${state.query}`);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { stories: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };
  const handleChange = (act) => {
    dispatch({ type: SET_PAGE, payload: act });
  };
  const handleQuery = (value) => {
    dispatch({ type: SET_SEARCH, payload: value });
  };
  useEffect(() => {
    getStories();
    // eslint-disable-next-line
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleChange, handleQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, useGlobalContext };
export default AppProvider;
