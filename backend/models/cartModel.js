const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartSchema = new Schema({
  userId: {
    type: String,
    unique: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  cart: {
    type: [{}]
  }
})

module.exports = mongoose.model('Cart', cartSchema)