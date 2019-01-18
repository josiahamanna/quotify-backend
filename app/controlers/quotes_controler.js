const express = require('express')
const router = express.Router()
const { Quote } = require('../models/quote')


// route to listing quotes
router.get('/', (req, res)=>{
    Quote.find()
        .then((quotes)=>{
            res.send(quotes)
        })
        .catch((err)=>{
            res.send(err)
        })
})


// route to post quote
router.post('/', (req, res)=>{
    const body = req.body
    const quote = new Quote(body)
    quote.save()
        .then((quote)=>{
            if(contact) {
                res.send(quote)
            } else {
                res.send({})
            }            
        })
        .catch((err) => {
            res.send(quote)
        })
})

router.get('/random', (req, res)=>{
    Quote.find()
        .then((quotes)=>{
            res.send(quotes[(Math.floor(Math.random()*100))%quotes.length])
        })
        .catch((err)=>{
            res.send(err)
        })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    Quote.findById(id)
        .then((quote)=>{
            if(quote){
                res.send(quote)
            } else {
                res.send({})
            }
        })
        .catch((err)=>{
            res.send(err)
        })
})

router.put('/:id', (req, res)=>{
    const id = req.params.id
    const body = req.body
    Quote.findByIdAndUpdate(id, {...body}, {new: true})
        .then((quote)=>{
            if(quote) {
                res.send(quote)
            } else {
                res.send({})
            }
        })
        .catch((err)=>{
            res.send(err)
        })
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id
    Quote.findByIdAndDelete(id)
        .then((quote)=>{
            if(quote) {
                res.send(quote)
            } else {
                res.send({})
            }
        })
        .catch((err)=>{
            res.send(err)
        })
})



module.exports = { quoteRouter: router }