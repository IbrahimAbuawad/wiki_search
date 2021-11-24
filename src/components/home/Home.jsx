import React, { useContext, useEffect, useState } from "react";
import { SearchCont } from "../../context/searchContext";
import RenderData from "../renderData/RenderData";
import { TiDeleteOutline } from "react-icons/ti";
import "./home.css";
function Home() {
  const [keyWord, setKeyWord] = useState("pizza");
  const context = useContext(SearchCont);

  function newWord(e) {
    setKeyWord(e.target.value);
  }

  useEffect(() => {
    context.fetchingData(keyWord);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyWord]);

  function deleteKeyWord(e) {
    document.getElementById("keyword").value = "";
    setKeyWord("");
  }

  return (
    <>
      <div class="searchSec">
        <a
          id="randomLink"
          rel="noreferrer"
          target="_blank"
          href={context.randomData}
        >
          <p class="randomPar">Click here for a random article</p>
        </a>
        <form>
          <div class="formContainer">
            <input
              onChange={(e) => {
                newWord(e);
              }}
              type="text"
              id="keyword"
              name="keyword"
              defaultValue="pizza"
            />
            {keyWord && (
              <TiDeleteOutline
                onClick={(e) => {
                  deleteKeyWord(e);
                }}
                size="25px"
                id="deleteIcon"
                color="orange"
              />
            )}
          </div>
        </form>
      </div>
      {context.renderData && (
        <RenderData
          renderDataTitle={context.renderData[1]}
          renderDataLinks={context.renderData[3]}
        />
      )}
    </>
  );
}

export default Home;
