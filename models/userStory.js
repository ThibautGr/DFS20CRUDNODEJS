const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userStorySchema = new Schema({
    Tile: String,
    description: String,
    acceptanceCriteria : String,
    priority : Number
});

const UserStory = mongoose.model("UserStory", projectSchema)


module.exports = UserStory;