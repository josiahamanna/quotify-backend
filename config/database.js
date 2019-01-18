// DB configuration

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/quotify-react-db', {useNewUrlParser: true})
    .then(()=>console.log('connected to db'))
    .catch((err)=>console.log(err))