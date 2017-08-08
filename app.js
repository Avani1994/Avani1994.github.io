const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/index-demo.html')
})

app.get('/*', function (req, res) {
  console.log(req.url)
  res.sendFile( __dirname + req.url)
})

app.listen(6969, function () {
  console.log('Example app listening on port 6969!')
})
