import React, { useEffect, useMemo, useState } from 'react'

import { initialSteamGameState } from '../../features/steam/steam.state'
import type { ISteamGame } from '../../features/steam/steam.state'
import { getLatestSteamGames } from '../../features/steam/steam.service'
import { copy } from '../../lib/copy'

type TrackerSegment =
  | {
      id: string
      kind: 'image'
      imageUrl: string
      alt: string
    }
  | {
      id: string
      kind: 'text'
      label: string
    }

const buildFeaturedItems = (steamGame: ISteamGame): TrackerSegment[] => {
  const {
    name,
    playtime2Weeks,
    playtimeAllTime,
    capsuleUrl,
    achievementCount,
    achievementTotal
  } = steamGame

  return [
    {
      id: 'image',
      kind: 'image',
      imageUrl: capsuleUrl,
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

const buildRecentItems = (games: ISteamGame[]): TrackerSegment[] =>
  games.flatMap((game) => [
    {
      id: `img-${game.appId}`,
      kind: 'image' as const,
      imageUrl: game.capsuleUrl,
      alt: game.name
    },
    {
      id: `name-${game.appId}`,
      kind: 'text' as const,
      label: `${game.name} — ${Math.round(game.playtimeAllTime / 60)}h`
    }
  ])

interface MarqueeBannerProps {
  items: TrackerSegment[]
  duration?: number
  reverse?: boolean
}

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items,
  duration = 32,
  reverse = false
}) => {
  const repeated = useMemo(
    () => Array.from({ length: Math.max(5, Math.ceil(20 / items.length)) * 2 }, () => items).flat(),
    [items]
  )

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex w-max min-w-[200%]"
        style={{
          animation: `${reverse ? 'marquee-scroll-reverse' : 'marquee-scroll'} ${duration}s linear infinite`
        }}
      >
        {repeated.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className="mr-3 inline-flex items-center gap-[10px] whitespace-nowrap bg-black/52 px-3 py-2 text-[#f0ece4]"
          >
            {item.kind === 'image' ? (
              <img
                src={item.imageUrl}
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
  )
}

const SteamTracker: React.FC = () => {
  const [featured, setFeatured] = useState<ISteamGame>(initialSteamGameState)
  const [lastPlayed, setLastPlayed] = useState<ISteamGame[]>([
    initialSteamGameState
  ])

  useEffect(() => {
    const fetch = async () => {
      const result = await getLatestSteamGames()
      if (result) {
        setFeatured(result.featured)
        setLastPlayed(result.lastPlayed)
      }
    }

    fetch()
  }, [])

  const featuredItems = useMemo(() => buildFeaturedItems(featured), [featured])
  const recentItems = useMemo(() => buildRecentItems(lastPlayed), [lastPlayed])

  return (
    <section className="flex w-full flex-col gap-2 bg-[linear-gradient(90deg,#1a1917,#26231f,#1a1917)] py-2">
      <MarqueeBanner items={featuredItems} duration={32} />
      <MarqueeBanner items={recentItems} duration={32} reverse />
    </section>
  )
}

export default SteamTracker
