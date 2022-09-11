import { useEffect, useState } from "react";

export default function useData() {
  const [respFetch, setRespFetchData] = useState({
    tvShows: [],
    episodes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const resultTvShows = await fetch(
        "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"
      );
      const resultEpisodes = await fetch(
        "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json"
      );
      const tvShowsData = await resultTvShows.json();
      const episodes = await resultEpisodes.json();
      const episodesFilter = episodes.filter((item) => {
        return item !== null;
      });

      setRespFetchData({
        tvShows: tvShowsData,
        episodes: episodesFilter,
      });
    };
    fetchData();
  }, []);
  return respFetch;
}
