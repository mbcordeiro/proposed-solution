const { response } = require('express')
const api = require('./api')

class Pokemon {
  async getPokemon(params) {
    const { data } = await api.get(`/pokemon/${params}`)
    return data
  }
}

module.exports = new Pokemon()
