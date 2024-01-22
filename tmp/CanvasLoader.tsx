import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '140px'
      }}
    >
      <span className="canvas-loader"></span>
      <p
        className="text-secondary"
        style={{
          fontSize: 14,
          // color: '#F1F1F1',
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader
