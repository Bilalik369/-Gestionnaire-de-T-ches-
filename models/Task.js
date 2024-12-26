const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  _id : Number,
  title : {
    type : String,
    require : true 
  }, 
  description :{
    type : String, 
    require : true
  },

  completed : {
    type : Boolean,
    default : false

  }


});

module.exports = mongoose.model('Task', taskSchema);
