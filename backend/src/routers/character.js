const express = require('express')
const { Character, User, Attribute } = require('../models/user')
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

router.get('/characters', auth, async (req, res) => {
    try {
        await req.user.populate({
            path: 'chars'
        }).execPopulate()
        res.send(req.user.chars)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/characters/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const character = await Character.findOne({_id, owner: req.user._id })

        if (!character) {
            return res.status(500).send()
        }

        res.send(character)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/characters/:id/attributes', auth, async (req, res) => {
    try {
        const character = await Character.findOne({_id: req.params.id, owner: req.user._id})
        
        if (!character) {
            return res.status(500).send()
        }

        character.attributes = {
            ...character.attributes,
            ...req.body
        }
        await character.save()
        res.send(character)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/characters/:id/physicals', auth, async (req, res) => {
    try {
        const character = await Character.findOne({ _id: req.params.id, owner: req.user._id })

        if (!character) {
            return res.status(500).send()
        }

        character.physicals = {
            ...character.physicals,
            ...req.body
        }

        await character.save()
        res.send(character)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router