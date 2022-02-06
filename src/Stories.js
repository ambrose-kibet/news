import React from "react";
import { useGlobalContext } from "./AppProvider";

const Stories = () => {
  const { isLoading, stories, removeStory } = useGlobalContext();
  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }
  return (
    <section className="section-container">
      {stories.map((item) => {
        const { author, points, num_comments, objectID, title, url } = item;
        return (
          <article key={objectID} className="article">
            <h5> {title}</h5>
            <div>
              <span>{points}points</span> <span>by {author} </span>|{" "}
              <span>{num_comments}comments</span>
            </div>
            <div>
              <a href={url} target="_blank" rel="noreferrer" className="link">
                Read more
              </a>
              <button className="remove" onClick={() => removeStory(objectID)}>
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
