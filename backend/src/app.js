const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const characterRouter = require('./routers/character')
const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(characterRouter)


module.exports = app