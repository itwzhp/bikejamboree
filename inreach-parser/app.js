const express = require('express')
const got = require('got')
const HTMLParser = require('node-html-parser')
const cors = require("cors");

const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
  let time, lat, lon

  got("https://share.garmin.com/Feed/Share/JednosladamiAndersa")
    .then(response => {
      const kmlData = HTMLParser.parse(response.body)
      time = kmlData.querySelectorAll('data[name=Time] value')[0].childNodes[0]['_rawText']
      lat = kmlData.querySelectorAll('data[name=Latitude] value')[0].childNodes[0]['_rawText']
      lon = kmlData.querySelectorAll('data[name=Longitude] value')[0].childNodes[0]['_rawText']
    })
    .then(() => {
      res.send({
        lat: lat,
        lon: lon,
        time: time
      })
    })
})

app.listen(port)
