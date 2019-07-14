const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        default: 18
    },
    experience: {
        type: Number,
        default: 0
    },
    size: {
        type: Number,
        default: 5
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

characterSchema.virtual('attributes', {
    ref: 'Attributelist',
    localField: '_id',
    foreignField: 'owner'
}, 'mentals', {
    ref: 'skillsMentalList',
    localfields: '_id',
    foreignField: 'owner'
})


const Character = mongoose.model('Character', characterSchema)

module.exports = Character

