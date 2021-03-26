const axios = require('axios')
const token =
  'BQA0U2rfYoOV8P4WI13u3rlnoVim-50WYHODufps0paCXpFq7aWhqQrrtB-xtZcGXVQvejtfflijcD2XFPmRKsFhCdlUexMojyATbeA7UWPj17kjwSNOH2gjXDkRHHqvICRYT__yPPmL6cYmZd_t1RRHG3U1EsFl5u1Hv_t35ps4Bp_bomIIo9zpH52B5NHrg70SGssKRf5gxrkQWHlzC04CmOaZT3xODgTNsuJ0aNYjJCJy6GGU7EMYZlDbwBUACLSf8z-tntRamL6JmqQ5LtHl8hz78H2Kkfxx6T7-'
const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

module.exports = api
