import React from "react";
import { useGlobalContext } from "./AppProvider";

const Buttons = () => {
  const { page, isLoading, handleChange, nbPages } = useGlobalContext();
  return (
    <section className="section-container">
      <div>
        <button
          disabled={isLoading}
          className={"btn"}
          onClick={() => handleChange("dec")}
        >
          Prev
        </button>
        {page + 1} Of {nbPages}
        <button
          disabled={isLoading}
          className={"btn"}
          onClick={() => handleChange("inc")}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Buttons;
