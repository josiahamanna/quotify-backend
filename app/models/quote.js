const mongoose = require('mongoose')
// const validator = require('validator')

const { Schema } = mongoose

const quoteSchema = new Schema({
    quoteAuthor: {
        type: String,
        required: true
    },
    quoteText: {
        type: String,
        required: true
    },
    tag: {
        type: [String]
    }
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = { Quote }