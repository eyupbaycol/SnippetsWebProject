const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProjectSchema = new Schema({
  username: {
    type:String,
    required:true,
  },
  movieId : {
    type:String,
    required:true
  },
  createdUser:{
    type:Boolean,
    required:true
  }
});

module.exports = mongoose.model("userProjects", userProjectSchema);