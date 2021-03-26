const express = require('express')
const pokemon = require('./api/pokemon')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send(`Hey it's working !!`)
})

routes.get('/pokemon/:id', async (req, res) => {
  const params = req.params.id
  const result = await pokemon.getPokemon(params)
  return res.json(result)
})
module.exports =  routes
