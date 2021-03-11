const { Schema, model } = require("mongoose");

const schema = Schema({
  name: { type: String, default: "" },
  id: { type: String, default: "" },
  sharers: { type: Array, default: [] },
  desc: { type: String, default: "" },
  modules: { type: Array, default: [] },
  mainCode: { type: String, default: "" },
  command: { type: String, default: "" },
  rank: { type: String, default: "" },
  bug: { type: String, default: "" },
  likedUsers: { type: Array, default: [] },
  date: { type: Number, default: Date }
});

module.exports = model("code", schema);