import React from "react";
import "./renderData.css";

function RenderData(props) {
  if (props?.renderDataTitle?.length === 1 && props?.renderDataLinks?.length) {
    return <h1 class='nothing'>Nothing To Show</h1>;
  } else {
    return (
      <>
        <div class="articles">
          {props?.renderDataTitle?.map((e, idx) => {
            return (
              <div class='article'>
                <a class="artLinks" rel='noreferrer' target='_blank' href={props?.renderDataLinks[idx]}>
                  <h6>{e}</h6>
                </a>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default RenderData;
