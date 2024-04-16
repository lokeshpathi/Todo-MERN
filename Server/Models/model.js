const mongoose = require('mongoose')

const todoSchema  = new mongoose.Schema({
   task:String,
   done:Boolean
   
})

module.exports = mongoose.model('Todo',todoSchema)