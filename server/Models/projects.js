const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  projectName: {
    type:String,
    required:true,
    unique:true
  },
  projectDescription: {
    type:String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("projects", projectsSchema);