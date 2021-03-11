const { Schema, model } = require("mongoose");

const schema = Schema({
  userID: { type: String, default: "" },
  codes: { type: Array, default: [] },
  getLikeCount: { type: Number, default: 0 }
});

module.exports = model("user", schema);