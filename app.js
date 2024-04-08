const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Boujour tout le monde!')
})

app.listen(process.env.PORT, function () {
  console.log('Exemple Exress')
})
