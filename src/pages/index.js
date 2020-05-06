import React, { useEffect } from "react";

import Main from "../main";
export default () => {
  useEffect(() => {

    Main();
  },[]);
  return (
    <div id="app">
      <style global jsx>
        {`
          html,
          body,
          body > div,
          #app {
            height: 100%;
            margin: 0;
          }
          canvas {
            outline: 2px solid #fff;
          }

          body {
            background-color: #000;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};
