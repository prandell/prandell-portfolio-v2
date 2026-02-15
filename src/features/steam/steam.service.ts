import type {
  SteamApiResponse,
  SteamAchievementResponse,
  SteamGameResponse
} from './steam-response.model'
import type { ISteamGame } from './steam.state'
import { getRecentGames } from '../../lib/firebase'

const mapGame = (
  game: SteamGameResponse,
  achievements?: SteamApiResponse['achievements']
): ISteamGame => ({
  appId: game['appid'],
  name: game['name'],
  playtime2Weeks: game['playtime_2weeks'],
  playtimeAllTime: game['playtime_forever'],
  bannerUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game['appid']}/header.jpg`,
  capsuleUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game['appid']}/capsule_231x87.jpg`,
  heroUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game['appid']}/hero_capsule.jpg`,
  achievementCount:
    achievements?.playerstats?.achievements?.reduce(
      (total: number, a: SteamAchievementResponse) => total + a.achieved,
      0
    ) ?? 0,
  achievementTotal:
    achievements?.playerstats?.achievements?.length ?? 0
})

interface SteamGamesResult {
  featured: ISteamGame
  recentGames: ISteamGame[]
}

const handleSteamApiResponse = (
  response: SteamApiResponse
): SteamGamesResult | undefined => {
  if (
    response &&
    response.recentgames &&
    response.recentgames.total_count > 0
  ) {
    const games = response.recentgames.games
    if (games && games.length > 0) {
      return {
        featured: mapGame(games[0], response.achievements),
        recentGames: games.map((g) => mapGame(g))
      }
    }
  }
}

export const getLatestSteamGames = async (): Promise<SteamGamesResult | undefined> => {
  const response = await getRecentGames()
    .then((result) => {
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
