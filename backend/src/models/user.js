const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const CharacterSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value > 30) {
                throw new Error("Name is too long")
            }
        }
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 15) {
                throw new Error('Must be older than 15')
            }
        }
    },
    concept: { type: String, required: true },
    virtue: { type: String, required: true },
    vice: { type: String, required: true },
    faction: { type: String },
    size: { type: Number, default: 5 },
    attributes: {
        intelligence: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        wits: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        resolve: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        strength: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        dexterity: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        stamina: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        presence: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        manipulation: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        },
        composure: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Attribute must be between 1-5')
                }
            }
        }
    },
    physicals: {
        athletics: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        brawl: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        drive: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        firearms: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        larceny: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        stealth: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        survival: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        weaponry: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        }
    },
    mentals: {
        academics: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        computer: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        crafts: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        investigation: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        medicine: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        occult: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        politics: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        science: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        }
    },
    socials: {
        animalken: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        empathy: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        expression: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        intimidation: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        persuasion: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        socialize: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        streetwise: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        },
        subterfuge: {
            required: true,
            default: 1,
            type: Number,
            validate(value) {
                if (value < 1 || value > 5) {
                    throw new Error('Skill must be between 1-5')
                }
            }
        }
    }
})


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }]
})

UserSchema.virtual('chars', {
    ref: 'Character',
    localField: '_id',
    foreignField: 'owner'
})

// CharacterSchema.virtual('atts', {
//     ref: 'Attribute',
//     localField: '_id',
//     foreignField: 'owner'
// })

// Generate Auth Token Method
UserSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}
// Login, find user & then use BCrypt to check password.
UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
UserSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// Delete user characters when user is removed
UserSchema.pre('remove', async function (next) {
    const user = this
    await Character.deleteMany({ owner: user._id })
    next()
})

const User = mongoose.model('User', UserSchema)
const Character = mongoose.model('Character', CharacterSchema)


module.exports = {
    User,
    Character
}