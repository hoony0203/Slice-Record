import { useArtistStore } from "../../../../store/artistStore";

const ArtistVideoList = () => {
  const { artistVideoList } = useArtistStore();

  return (
    <>
      {artistVideoList.map((item, i) => {
        return (
          <div key={i}>
            {item.title}

            <img src={item.thumbnail} alt="" width="80px" height="80px" />
          </div>
        );
      })}
    </>
  );
};

export default ArtistVideoList;
