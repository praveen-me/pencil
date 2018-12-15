const mongoose = require('mongoose');


const ObjectId = mongoose.Schema.Types.ObjectId;
const storySchema = new mongoose.Schema({
  title : String,
  description : String,
  cover : {type : String, default : ''},
  date : {type : Date, default : new Date()},
  claps : {type : Number, default : 0}
})

const Story = mongoose.model('Story', storySchema);

module.exports = Story;