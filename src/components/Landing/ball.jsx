import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
// import Scene from './Scene'
import styles from './style.module.scss'

export default function Ball() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#002fa7', fill: '#002fa7' }, [])
  return (
    <a.main style={{ background }} className={styles.main}>
     <Canvas className={styles.canvas} dpr={[1, 2]}>
        {/* <Scene setBg={set} /> */}
        {/* <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> */}
      </Canvas> 
    </a.main>
  )
}
