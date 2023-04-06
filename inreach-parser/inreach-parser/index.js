const got = require('got')
const HTMLParser = require('node-html-parser')

module.exports = async function (context, req) {
  let time, lat, lon

  const response = await got(
    'https://share.garmin.com/Feed/Share/JednosladamiAndersa'
  )

  const kmlData = HTMLParser.parse(response.body)
  time = kmlData.querySelectorAll('data[name=Time] value')[0].childNodes[0][
    '_rawText'
  ]
  lat = kmlData.querySelectorAll('data[name=Latitude] value')[0].childNodes[0][
    '_rawText'
  ]
  lon = kmlData.querySelectorAll('data[name=Longitude] value')[0].childNodes[0][
    '_rawText'
  ]

  context.res = {
    body: {
      lat: lat,
      lon: lon,
      time: time,
    },
  }
}
