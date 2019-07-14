const mongoose = require('mongoose')

const attributelistSchema = new mongoose.Schema({
    intelligence: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    wits: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    resolve: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    strength: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    dexterity: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    stamina: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    presence: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    manipulation: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    composure: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1 - 5')
            }
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Character'
    }
})

const Attributelist = mongoose.model('Attributelist', attributelistSchema)

module.exports = Attributelist
