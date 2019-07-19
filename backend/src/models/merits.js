const mongoose = require('mongoose')
const validator = require('validator')

const MeritSchema = new mongoose.Schema({
    name: {},
    preqs: {},
    levels: []
})

const Merit = mongoose.model('Merit', MeritSchema)

module.exports = Merit