import React from "react";
import stack from "../../data/stackImage";

const ImgItem = () => {
  return (
    <>
      {stack.map((stack, i) => {
        return (
          <div className="stack-item" key={i}>
            <label>
              <p>{stack.name}</p>
            </label>
            <img
              src={stack.url}
              alt=""
              width="180"
              height="180"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      })}
    </>
  );
};

export default ImgItem;
