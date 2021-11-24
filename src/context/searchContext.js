import React, { useState, useEffect } from "react";
import axios from "axios";

export const SearchCont = React.createContext();

function SearchContext(props) {
  const [renderData, setRenderData] = useState([]);
  const [randomData, setRandomData] = useState("");

  const wikiSerachAPI = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=`;
  const randomWikiAPI =
    "https://en.wikipedia.org/api/rest_v1/page/random/summary";

  async function fetchingRandomData() {
    let data = await axios.get(`${randomWikiAPI}`);

    setRandomData(data.data.content_urls.desktop.page);
  }
  useEffect(() => {
    fetchingRandomData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchingData(keyWord) {
    setTimeout(async () => {
      let data = await axios.get(`${wikiSerachAPI}${keyWord}`);

      setRenderData(data.data);
    }, 1000);
  }

  return (
    <SearchCont.Provider
      value={{ fetchingRandomData, fetchingData, renderData ,randomData}}
    >
      {props.children}
    </SearchCont.Provider>
  );
}

export default SearchContext;
