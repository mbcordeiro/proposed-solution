const express = require('express')
const spotify = require('./api/spotify')

const app = express()

app.get('/spotify', async (req, res) => {
  const params = req.query

  const result = await spotify.recommendation(params)

  return res.json(result)
})

app.listen('3000')
