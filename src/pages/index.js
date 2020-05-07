import React, { useEffect } from "react";

import Main from "../main";
import createPlayer from "../createPlayer";
const io = require("socket.io-client");
const socket = io();

const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

export default () => {
  useEffect(() => {
    let game;
    Main();
     game = window.game;
    // socket.emit("game init", window.game);
    // socket.on('game start',(game)=>{
    //   console.log(game)
    // })
    // socket.on("game start", () => {
      game.state.entities = game.state.entities || {};
      game.state.entities.players = [];

      socket.on("dev join", (id) => {
        console.log("Dev Joined", id);

        createPlayer(id);
        console.log(game.state.entities.players);
      });

      socket.on("dev leave", (id) => {
        console.log("Dev Left", id);

        game.state.entities.players.filter((ent) => {
          if (ent.state._id === id)
            remove(game.state.entities.players, () => ent.state._id === id);
        });
        console.log(game.state.entities.players);
        //Grab Game from Global Scope
      });
    // });
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
