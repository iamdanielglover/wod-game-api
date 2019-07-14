const mongoose = require('mongoose')

const skillsPhysicalListSchema = new mongoose.Schema({
    athletics: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    brawl: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    drive: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    firearms: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    larceny: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    stealth: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    survival: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    weaponry: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1 - 5')
            }
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Character'
    }
})

const skillsPhysicalList = mongoose.model('skillsPhysicalList', skillsPhysicalListSchema)

module.exports = skillsPhysicalList