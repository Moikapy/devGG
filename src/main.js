const io = require("socket.io-client");
const socket = io();
const Game = require("../lib");
const createPlayer = require("./createPlayer");
import { remove, setStorage, getStorage } from "moihelp";
export default () => {
  /**
   * Game INIT
   */
  Game._container = document.getElementById("app");
  Game.init(document.body.clientWidth, document.body.clientHeight);
  Game.initEntity("players", []);

  const setupUser = () => {
    /**
     * Init User If Not Found
     */
    const devGGUSER = getStorage("devGGUSER");
    if (devGGUSER === null || devGGUSER === undefined) {
      setStorage("devGGUSER", JSON.stringify({ id }));
    }
    /**
     * Retrieve User
     */
    if (devGGUSER !== null || devGGUSER !== undefined) {
      let userData = JSON.parse(devGGUSER);
      const { id } = userData;
      createPlayer(id);
      console.log("Dev Joined: ", id);
    }
  };

  socket.on("dev join", () => {
    setupUser();
    console.log(Game.getEntity("players"));

    // console.log(Game.state.entities.players);
  });

  // socket.on("dev leave", (id) => {
  //   console.log("Dev Left", id);

  //   Game.entities.players.filter((ent) => {
  //     if (ent.state._id === id)
  //       remove(Game.entities.players, () => ent._id === id);
  //   });
  //   console.log(Game.entities.players);
  //   //Grab Game from Global Scope
  // });
};
