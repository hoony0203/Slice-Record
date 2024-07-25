import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useArtistStore } from "../../../../store/artistStore";

const ArtistVideoList = () => {
  const { artistVideoList, artistPage, artistName } = useArtistStore();

  return (
    <>
      {artistVideoList.map((item, i) => {
        return <div key={i}>{item.snippet.title}</div>;
      })}
    </>
  );
};

export default ArtistVideoList;
