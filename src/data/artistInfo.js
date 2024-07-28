import artistInfo from "../data/data";

let getArtistInfo = (array) => {
  for (let i = 0; i < artistInfo.length; i++) {
    let obj = {};
    obj["name"] = artistInfo[i].name;
    obj["channelId"] = artistInfo[i].channelId;
    obj["playlistId"] = artistInfo[i].playlistId;
    obj["genre"] = artistInfo[i].genre;
    obj["imgUrl"] = artistInfo[i].imgUrl;
    array.push(obj);
  }
};

export default getArtistInfo;
