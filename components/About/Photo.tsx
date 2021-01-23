import * as React from 'react'
import { useState, memo } from 'react'
import styled from 'styled-components'
import { motion, useSpring } from 'framer-motion'

const Photo = () => {
  const [rotateImage, setRotateImage] = useState(false)
  const rotate = useSpring(0, { stiffness: 200 })

  return (
    <motion.div
      style={{ position: 'relative' }}
      animate={{ y: [5, -5], rotate: [1, -1] }}
      transition={{
        yoyo: Infinity,
        duration: 5,
      }}
      onMouseEnter={() => {
        setRotateImage(true)
        rotate.set(45)
      }}
      onMouseLeave={() => {
        setRotateImage(false)
        rotate.set(0)
      }}
    >
      <PersonalImage
        style={{ rotate }}
        rotateImage={rotateImage ? true : false}
      />
    </motion.div>
  )
}

export default memo(Photo)

// Styles
const PersonalImage = styled(motion.div)`
  width: 50rem;
  height: 50rem;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );
  position: relative;
  z-index: 10;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -10%;
    bottom: -10%;
    left: -10%;
    right: -10%;
    background: url('/nico.jpg') center/cover;
    transform: ${(props: { rotateImage: boolean }) =>
      props.rotateImage && `rotate(-45deg)`};
    transition: transform 300ms;
  }

  @media (max-width: 1199px) {
    display: none;
  }
`
