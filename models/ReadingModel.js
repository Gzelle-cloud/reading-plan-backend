const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
  title: 
    {
      type: String, 
      required: true
    },
  category: String
})

module.exports = mongoose.model('Book', readingSchema)