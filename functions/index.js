const functions = require('firebase-functions/v1')
require('firebase-functions/logger/compat')
const cors = require('cors')({ origin: true })
const axios = require('axios')

exports.getRecentGames = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const API_ENDPOINT = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?steamid=${process.env.REACT_APP_STEAM_USER_ID}&count=10&key=${process.env.REACT_APP_STEAM_API_KEY}`
      const { data } = await axios.get(API_ENDPOINT)

      if (data.response['total_count'] > 0) {
        data.response['games'].sort(
          (a, b) => b['playtime_2weeks'] - a['playtime_2weeks']
        )

        const achievementsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?steamid=${process.env.REACT_APP_STEAM_USER_ID}&appid=${data.response.games[0].appid}&key=${process.env.REACT_APP_STEAM_API_KEY}`
        const achievementsResponse = await axios.get(achievementsUrl)

        return response.send({
          data: {
            recentgames: data.response,
            achievements: achievementsResponse.data
          }
        })
      }

      return response.send({
        data: { recentgames: { total_count: 0, games: [] } }
      })
    } catch (error) {
      console.error('getRecentGames error:', error)
      response.status(500).send({ error: 'Failed to fetch recent games' })
    }
  })
})

const ai = require('./ai')
exports.askPatQuestion = ai.askPatQuestion
