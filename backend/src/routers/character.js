const express = require('express')
const { Character, User } = require('../models/user')
const Merit = require('../models/merits')
const auth = require('../middleware/auth')
const router = new express.Router()
const gladitorial = require('../models/mock')


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

router.post('/characters/:id/mentals', auth, async (req, res) => {
    try {
        const character = await Character.findOne({ _id: req.params.id, owner: req.user._id })

        if (!character) {
            return res.status(500).send()
        }

        character.mentals = {
            ...character.mentals,
            ...req.body
        }

        await character.save()
        res.send(character)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/characters/:id/socials', auth, async (req, res) => {
    try {
        const character = await Character.findOne({ _id: req.params.id, owner: req.user._id })

        if (!character) {
            return res.status(500).send()
        }

        character.socials = {
            ...character.socials,
            ...req.body
        }

        await character.save()
        res.send(character)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/merits', async (req, res) => {
    try {
        const merits = await Merit.find({})
        res.status(200).send(merits)
    } catch (e) {
        console.log('Nope')
        res.status(500).send(e)
    }
})

router.post('/merits', async (req, res) => {
    try {
        const merit = await new Merit(gladitorial)
        merit.save()
        res.status(201).send(merit)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router