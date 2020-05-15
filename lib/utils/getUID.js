var id;
const _setUID = (v) => {
  id = v;
  return id;
};
const getUID = () => {
  require("crypto").randomBytes(128, function genHash(err, buffer) {
    hex = buffer.toString("hex");
    _setUID(hex);
  });
  return id;
};
module.exports = getUID;
