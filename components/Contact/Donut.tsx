import styled from 'styled-components'
import { motion } from 'framer-motion'
import { memo } from 'react'

const Donut = () => {
  return (
    <picture>
      <source srcSet="/donut3.webp" type="image/webp" />
      <Donut3D
        src="/donut3.png"
        alt="Donut"
        animate={{ y: [5, 0, 5] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        loading="lazy"
      />
    </picture>
  )
}

export default memo(Donut)

// Styles
const Donut3D = styled(motion.img)`
  max-width: 95%;
  border-radius: 50%;
`
