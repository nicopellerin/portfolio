import * as React from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import Stars from './Stars'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from '@react-three/postprocessing'

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
        gl.setClearColor(new THREE.Color('#020207'))
      }}
    >
      <React.Suspense fallback={null}>
        <Stars />
        <fog attach="fog" args={['#DD5E98', 8, 1]} />
        <directionalLight position={[0, 1, 2]} color="white" />
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={2}
            bokehScale={2}
            height={480}
          />
          <Bloom
            luminanceThreshold={21}
            luminanceSmoothing={0.9}
            height={300}
          />
          {/* <Noise opacity={0.02} /> */}
          <Vignette eskil={false} offset={0.1} darkness={1.0} />
        </EffectComposer>
      </React.Suspense>
    </Canvas>
  )
}

export default Background
