import React from "react";

const ImgItem = () => {
  return (
    <>
      <ItemList />
    </>
  );
};

let ItemList = () => {
  let array = new Array();

  for (let i = 0; i < 6; i++) {
    array.push(
      <div className="img-item" key={i}>
        <img
          src="https://kanak-sample.cdn.prismic.io/kanak-sample/65d2ce1b9be9a5b998b5fba8_logo-mcdonald.svg?auto=compress,format"
          alt="McDonald"
          width="180"
          height="180"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }
  return array;
};

export default ImgItem;
