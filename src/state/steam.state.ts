import { atom } from 'recoil'

export interface ISteamGame {
  appId: number
  name: string
  playtime2Weeks: number
  playtimeAllTime: number
  bannerUrl: string
  heroUrl: string
  achievementCount: number
  achievementTotal: number
}

const initialState: ISteamGame = {
  appId: 252950,
  name: 'Rocket League',
  playtime2Weeks: 0,
  playtimeAllTime: 59940,
  bannerUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg`,
  heroUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/252950/hero_capsule.jpg`,
  achievementCount: 67,
  achievementTotal: 88
}

export const steamGameState = atom({
  key: 'steamGame',
  default: initialState
})
