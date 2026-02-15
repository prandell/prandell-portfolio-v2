import React, { useEffect, useState } from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { TransitionDirection, fadeIn } from '../../lib/motion'
import { initialSteamGameState } from '../../features/steam/steam.state'
import type { ISteamGame } from '../../features/steam/steam.state'
import { LiveBlinker } from './SteamTracker.styles'
import { getLatestSteamGame } from '../../features/steam/steam.service'

interface SteamTrackerProps {}

const SteamTracker: React.FC<SteamTrackerProps> = ({}) => {
  const [steamGame, setSteamGame] = useState<ISteamGame>(initialSteamGameState)
  const {
    name,
    playtime2Weeks,
    playtimeAllTime,
    bannerUrl,
    achievementCount,
    achievementTotal
  } = steamGame

  useEffect(() => {
    const getGameAndUpdate = async () => {
      const game = await getLatestSteamGame()
      if (game) {
        setSteamGame(game)
      }
    }
    getGameAndUpdate()
  }, [setSteamGame])

  return (
    <ReactParallaxTilt className="sm:w-[350px] w-full">
      <motion.div
        variants={fadeIn(TransitionDirection.RIGHT, 'spring', 1 * 0.5, 0.75)}
        className="w-full bg-gradient-to-b from-secondary to-orange-300 p-[1px] rounded-[10px] shadow-card"
      >
        <div className="bg-tertiary rounded-[10px] py-6 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
          <div className="w-full flex justify-between flex-row items-center ">
            <h3 className="text-white text-[18px] text-center">Playing now</h3>
            <LiveBlinker />
          </div>
          <img
            src={bannerUrl}
            alt={name}
            className="sm:w-full w-[350px] object-contain"
          />
          <div className="w-full flex justify-between flex-row items-center">
            <p className="flex text-[12px]">Playtime (2 weeks)</p>
            <p className="flex text-[12px]">
              {Math.round(playtime2Weeks / 60)} hrs
            </p>
          </div>
          <div className="w-full flex justify-between flex-row items-center">
            <p className="flex text-[12px]">Playtime (All time)</p>
            <p className="flex text-[12px]">
              {Math.round(playtimeAllTime / 60)} hrs
            </p>
          </div>
          <div className="w-full flex justify-between flex-row items-center">
            <p className="flex text-[12px]">Achievements</p>
            <p className="flex text-[12px]">
              {achievementCount} / {achievementTotal}
            </p>
          </div>
        </div>
      </motion.div>
    </ReactParallaxTilt>
  )
}

export default SteamTracker
