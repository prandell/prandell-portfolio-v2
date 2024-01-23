import { selector } from 'gsap'
import {
  SteamApiResponse,
  SteamAchievementResponse
} from '../models/steam-response.model'
import { ISteamGame } from '../state/steam.state'
import { getRecentGames } from '../utils/firebase'

const handleSteamApiResponse = (
  response: SteamApiResponse
): ISteamGame | undefined => {
  if (
    response &&
    response.recentgames &&
    response.recentgames.total_count > 0
  ) {
    const games = response.recentgames.games
    if (games && games.length > 0) {
      const recentGame = games[0]
      const game: ISteamGame = {
        appId: recentGame['appid'],
        name: recentGame['name'],
        playtime2Weeks: recentGame['playtime_2weeks'],
        playtimeAllTime: recentGame['playtime_forever'],
        bannerUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGame['appid']}/header.jpg`,
        heroUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGame['appid']}/hero_capsule.jpg`,
        achievementCount:
          response?.achievements?.playerstats?.achievements?.reduce(
            (total: number, achievement: SteamAchievementResponse) =>
              total + achievement.achieved,
            0
          ),
        achievementTotal:
          response?.achievements?.playerstats?.achievements?.length
      }
      return game
    }
  }
}

export const getLatestSteamGame = async () => {
  const response = await getRecentGames()
    .then((result: any) => {
      // Read result of the Cloud Function.
      const data: SteamApiResponse = result.data
      return data
    })
    .catch((error) => {
      const code = error.code
      const message = error.message
      console.log(
        `Failed to get Steam games - Error(${code}). Message: ${message}`
      )
    })
  if (response) {
    console.log(response)
    return handleSteamApiResponse(response)
  }
}
