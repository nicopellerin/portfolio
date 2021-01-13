import * as React from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import Stars from './Stars'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

const Background = () => {
  return (
    <Canvas
      colorManagement
      concurrent
      camera={{
        position: [10, -50, 30],
      }}
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '120vh',
        zIndex: -2,
      }}
      gl={{
        alpha: false,
        antialias: false,
        stencil: false,
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
      }}
    >
      <React.Suspense fallback={null}>
        <Stars />
        <fog attach="fog" args={['#DD5E98', 8, 1]} />
        <directionalLight position={[0, 1, 2]} color="white" />
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={2480}
          />
          {/* <Bloom
            luminanceThreshold={2}
            luminanceSmoothing={0.9}
            height={300}
            // opacity={3}
          /> */}
          {/* <SSAO /> */}
          {/* <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        </EffectComposer>
      </React.Suspense>
    </Canvas>
  )
}

export default Background
