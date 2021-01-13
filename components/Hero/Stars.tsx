import React, { useMemo, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const Stars = () => {
  const count = 400

  const mesh = useRef() as React.MutableRefObject<any>
  const light = useRef() as React.MutableRefObject<any>

  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle

      t = particle.t += speed / 5
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)

      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()

      mesh.current.setMatrixAt(i, dummy.matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <>
      <ambientLight
        ref={light}
        position={[3, 3, 0]}
        intensity={21}
        color="#cc4bc2"
      />
      <pointLight
        ref={light}
        position={[3, 3, 0]}
        distance={2020}
        intensity={8}
        color="#cc4bc2"
      />
      {/* @ts-ignore */}
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry attach="geometry" args={[0.4, 0]} />
        <meshStandardMaterial attach="material" color="#112" />
      </instancedMesh>
    </>
  )
}

export default Stars
