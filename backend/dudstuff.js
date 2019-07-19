const AttributeSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    },
    intelligence: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    wits: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    resolve: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    strength: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    dexterity: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    stamina: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    presence: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    manipulation: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    },
    composure: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Attribute must be between 1-5')
            }
        }
    }
})

const PhysicalSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    },
    athletics: { 
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    brawl: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    drive: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    firearms: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    larceny: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    stealth: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    survival: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    weaponry: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    }
})

const MentalSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    },
    academics: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    computer: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    crafts: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    investigation: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    medicine: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    occult: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    politics: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    science: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    }
})

const SocialSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    },
    animalken: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    empathy: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    expression: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    intimidation: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    persuasion: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    socialize: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    streetwise: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    },
    subterfuge: {
        type: Number,
        validate(value) {
            if (value < 1 || value > 5) {
                throw new Error('Skill must be between 1-5')
            }
        }
    }
})