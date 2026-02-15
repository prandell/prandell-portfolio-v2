const functions = require('firebase-functions/v1')
require('firebase-functions/logger/compat')
const cors = require('cors')({ origin: true })
const axios = require('axios')

exports.getRecentGames = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const steamId = process.env.REACT_APP_STEAM_USER_ID
      const apiKey = process.env.REACT_APP_STEAM_API_KEY

      const recentUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?steamid=${steamId}&count=10&key=${apiKey}`
      const ownedUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?steamid=${steamId}&include_appinfo=true&include_played_free_games=true&key=${apiKey}`

      const [recentRes, ownedRes] = await Promise.all([
        axios.get(recentUrl),
        axios.get(ownedUrl)
      ])

      const recentData = recentRes.data.response
      const ownedData = ownedRes.data.response

      // Build last-played list from owned games, sorted by rtime_last_played
      const lastPlayed = (ownedData.games || [])
        .filter((g) => g.rtime_last_played > 0)
        .sort((a, b) => b.rtime_last_played - a.rtime_last_played)
        .slice(0, 10)

      let achievements = null
      if (recentData.total_count > 0) {
        recentData.games.sort(
          (a, b) => b['playtime_2weeks'] - a['playtime_2weeks']
        )

        const achievementsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?steamid=${steamId}&appid=${recentData.games[0].appid}&key=${apiKey}`
        const achievementsResponse = await axios.get(achievementsUrl)
        achievements = achievementsResponse.data
      }

      return response.send({
        data: {
          recentgames: recentData.total_count > 0
            ? recentData
            : { total_count: 0, games: [] },
          achievements,
          lastplayed: lastPlayed
        }
      })
    } catch (error) {
      console.error('getRecentGames error:', error)
      response.status(500).send({ error: 'Failed to fetch recent games' })
    }
  })
})

const ai = require('./ai')
exports.askPatQuestion = ai.askPatQuestion
