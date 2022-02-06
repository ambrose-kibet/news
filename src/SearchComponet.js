import React from "react";
import { useGlobalContext } from "./AppProvider";

const SearchComponet = () => {
  const { query, handleQuery } = useGlobalContext();
  return (
    <section className="form-container">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h3>Search hacker news</h3>
        <input
          type="text"
          className="form-input"
          value={query}
          onChange={(e) => handleQuery(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchComponet;
