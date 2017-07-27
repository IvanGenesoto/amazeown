const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const data = require('./data')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.get('/featured', (req, res) => {
  res.json(data)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
