const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  snippet: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: String, required: true },
});

module.exports = model("Post", postSchema);
