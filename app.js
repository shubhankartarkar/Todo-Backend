const express = require('express')
const connectDb = require('./db/index')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
connectDb()

app.use('/api/user', require('./routes/users'))

app.get('/', async (req, res) => {
    res.send('Hello world')
})

app.listen(3001, () => {
    console.log('Listening...')
})