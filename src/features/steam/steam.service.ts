import type {
  SteamApiResponse,
  SteamAchievementResponse
} from './steam-response.model'
import type { ISteamGame } from './steam.state'
import { getRecentGames } from '../../lib/firebase'

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
    .then((result) => {
      // Read result of the Cloud Function.
      const data: SteamApiResponse = result.data
      return data
    })
    .catch((error) => {
      const code = error.code
      const errorMessage = error.message
      console.error(
        `Failed to get Steam games - Error(${code}). Message: ${errorMessage}`
      )
    })
  if (response) {
    return handleSteamApiResponse(response)
  }
}
