const express = require('express')
const Character = require('../models/character')
const User = require('../models/user')
const Attributelist = require('../models/attributes')
const SkillsMentalList = require('../models/mentalskills')
const SkillsPhysicalList = require('../models/physicalskills')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/characters', auth, async (req, res) => {
    const character = new Character({
        ...req.body,
        owner: req.user._id
    })
    try {
        await character.save()
        res.status(201).send(character)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Sets Attributes for Character
router.post('/characters/:id/attributes', auth, async (req, res) => {

    try {
        const character = await Character.findOne({_id: req.params.id, owner: req.user._id})
        if (!character) {
            return res.status(404).send()
        }

        await Attributelist.deleteMany({owner: character._id})

        const attributes = new Attributelist({
            ...req.body,
            owner: req.params.id
        })

        await attributes.save()
        res.status(201).send(attributes)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Sets mental skills for Character
router.post('/characters/:id/mentals', auth, async (req, res) => {

    try {
        const character = await Character.findOne({ _id: req.params.id, owner: req.user._id })
        if (!character) {
            return res.status(404).send()
        }

        await SkillsMentalList.deleteMany({ owner: character._id })

        const mentals = new SkillsMentalList({
            ...req.body,
            owner: req.params.id
        })

        await mentals.save()
        res.status(201).send(mentals)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Sets mental skills for Character
router.post('/characters/:id/physicals', auth, async (req, res) => {

    try {
        const character = await Character.findOne({ _id: req.params.id, owner: req.user._id })
        if (!character) {
            return res.status(404).send()
        }

        await SkillsPhysicalList.deleteMany({ owner: character._id })

        const mentals = new SkillsPhysicalList({
            ...req.body,
            owner: req.params.id
        })

        await physicals.save()
        res.status(201).send(physicals)
    } catch (e) {
        res.status(400).send(e)
    }
})


// Shows single Character
router.get('/characters/:id', auth, async (req, res) => {
    try {
        const character = await Character.findOne({_id: req.params.id, owner: req.user._id})
        const attributes = await Attributelist.findOne({owner: character._id})
        const mentals = await SkillsMentalList.findOne({owner: character._id})
        const physicals = await SkillsPhysicalList.findOne({owner: character._id})
        if (!character) {
            return res.status(404).send()
        }

        const display = {
            character,
            attributes,
            mentals, 
            physicals
        }
        res.status(200).send(display)
    } catch (e) {
        res.send(status(400).send(e))
    }
})

router.get('/characters', auth, async (req, res) => {
    try {
        await req.user.populate({
            path: 'characters'
        }).execPopulate()
        res.send(req.user.characters)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router