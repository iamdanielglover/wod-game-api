const mongoose = require('mongoose')

const skillsMentalListSchema = new mongoose.Schema({
    academics: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }
    },
    computer: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }
    },
    crafts: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }
    },
    investigation: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }      
    },
    medicine: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }
    },
    occult: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }
    },
    politics: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }
    },
    science: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error ('Skill must be between 1 - 5')
            }
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Character'
    }
})

const SkillsMentalList = mongoose.model('skillsMentalList', skillsMentalListSchema)

module.exports = SkillsMentalList