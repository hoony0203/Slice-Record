import { useGenreStore } from "../../../../store/genreStore";
import { useArtistStore } from "../../../../store/artistStore";

const GenreArtists = () => {
  const setArtistPage = useArtistStore((state) => state.actions.setArtistPage);
  const genreArtistList = useGenreStore((state) => state.genreArtistList);
  const resetArtistName = useGenreStore(
    (state) => state.actions.resetArtistName
  );

  return (
    <>
      <button className="genre-backBtn" onClick={resetArtistName}>
        <label>back</label>
        <i className="fa-solid fa-backward-step fa-5x"></i>
      </button>
      {genreArtistList.map((item, i) => {
        return (
          <div className="thumb-wrap" key={i}>
            <div
              className="thumb"
              onClick={() => setArtistPage(item.name, item.playlistId)}>
              <label className="thumb-label">{item.name}</label>
              <div className="thumb-overlay"></div>
              <img src={item.imgUrl} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GenreArtists;
