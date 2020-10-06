const mongoose = require("mongoose");
const listSchema = mongoose.Schema({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  author: {
    type: String,
  },
});
const List = mongoose.model("List", listSchema);
module.exports = List;
