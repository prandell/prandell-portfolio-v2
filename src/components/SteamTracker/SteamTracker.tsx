import React, { useEffect, useMemo, useState } from 'react'

import { initialSteamGameState } from '../../features/steam/steam.state'
import type { ISteamGame } from '../../features/steam/steam.state'
import { getLatestSteamGame } from '../../features/steam/steam.service'
import { copy } from '../../lib/copy'

type TrackerSegment =
  | {
      id: string
      kind: 'image'
      bannerUrl: string
      alt: string
    }
  | {
      id: string
      kind: 'text'
      label: string
    }

const buildBannerItems = (steamGame: ISteamGame): TrackerSegment[] => {
  const {
    name,
    playtime2Weeks,
    playtimeAllTime,
    bannerUrl,
    achievementCount,
    achievementTotal
  } = steamGame

  return [
    {
      id: 'image',
      kind: 'image',
      bannerUrl,
      alt: name
    },
    {
      id: 'now-playing',
      kind: 'text',
      label: `${copy.steam.nowPlaying}: ${name}`
    },
    {
      id: 'playtime-2w',
      kind: 'text',
      label: `${copy.steam.playtime2w}: ${Math.round(playtime2Weeks / 60)}h`
    },
    {
      id: 'playtime-all',
      kind: 'text',
      label: `${copy.steam.playtimeAll}: ${Math.round(playtimeAllTime / 60)}h`
    },
    {
      id: 'achievements',
      kind: 'text',
      label: `${copy.steam.achievements}: ${achievementCount}/${achievementTotal}`
    }
  ]
}

const SteamTracker: React.FC = () => {
  const [steamGame, setSteamGame] = useState<ISteamGame>(initialSteamGameState)

  useEffect(() => {
    const getGameAndUpdate = async () => {
      const game = await getLatestSteamGame()
      if (game) {
        setSteamGame(game)
      }
    }

    getGameAndUpdate()
  }, [])

  const items = useMemo(() => buildBannerItems(steamGame), [steamGame])
  const repeatedItems = useMemo(
    () => Array.from({ length: 5 }, () => items).flat(),
    [items]
  )

  return (
    <section className="w-full bg-[linear-gradient(90deg,#1a1917,#26231f,#1a1917)] py-2">
      <div className="w-full overflow-hidden">
        <div
          className="flex w-max min-w-[200%]"
          style={{ animation: 'marquee-scroll 32s linear infinite' }}
        >
          {repeatedItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="mr-3 inline-flex items-center gap-[10px] whitespace-nowrap bg-black/52 px-3 py-2 text-[#f0ece4]"
            >
              {item.kind === 'image' ? (
                <img
                  src={item.bannerUrl}
                  alt={item.alt}
                  className="h-[34px] w-auto object-cover"
                />
              ) : (
                <>
                  <span
                    className="inline-flex h-2 w-2 rounded-full bg-white"
                    style={{ animation: 'live-pulse 0.9s infinite alternate' }}
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f0ece4]">
                    {item.label}
                  </p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SteamTracker
