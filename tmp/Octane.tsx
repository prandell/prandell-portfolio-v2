import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { CanvasLoader } from './'

const Octane: React.FC<any> = ({ isMobile }) => {
  const computer = useGLTF('./octane/scene.gltf')

  useEffect(() => {
    const car = computer.scene.children[0]

    const carChildren: any = car.children[0]
    const carPaint = carChildren.children[0].children[0].children.find(
      (o: any) => o.name === 'Octane_Octane_Body_0'
    ).material?.color
    const carTrim = carChildren.children[0].children[0].children.find(
      (o: any) => o.name === 'Octane_Paint_0'
    ).material.color

    carPaint.r = 0.07
    carPaint.g = 0.04
    carPaint.b = 0.19
    carTrim.r = 0.8
    carTrim.g = 0.8
    carTrim.b = 0.8
  }, [])

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={20} />
      <pointLight intensity={20} position={[1, 3.5, -3.5]} />
      <pointLight intensity={20} position={[0.3, 3.9, 2.3]} />
      <pointLight intensity={20} position={[-5.4, 1.23, 0.015]} />
      <pointLight intensity={20} position={[0.26, 0.316, 3.4]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.03 : 0.04}
        position={[0, -3, 0]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const OctaneCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Octane isMobile={true} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default OctaneCanvas
