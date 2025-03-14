const ReadingModel = require('../models/ReadingModel.js');

module.exports.getBooks = async (req, res) => {
  const myPlan = await ReadingModel.find();
  res.send(myPlan); 
}

module.exports.saveBooks = async (req, res) => {
  const { title, category } = req.body;
  ReadingModel.create({ title, category })
  .then((data) => { 
    console.log('Book added') 
    res.send(data)
  })
}

module.exports.editBook = async (req, res) => {
  const {_id, title, category} = req.body;
  ReadingModel.findByIdAndUpdate(_id, { title, category })
  .then(() => res.send('Book edited'))
}

module.exports.deleteBook = async (req, res) => {
  const {_id} = req.body;
  ReadingModel.findByIdAndDelete(_id)
  .then(() => res.send('Book deleted'))
}