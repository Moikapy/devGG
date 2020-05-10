import React, { useEffect } from "react";

import Main from "../main";


const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

export default () => {
  useEffect(() => {
    Main();

  }, []);
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
