require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('*', (req, res) => {
    res.render('error404')
})
app.get('/', (req,res) => {
    res.render('places/index')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))
