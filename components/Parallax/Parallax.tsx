import { ReactNode, useState, useRef, useEffect } from 'react'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'

interface Props {
  children: ReactNode
  offset?: number
  offsetInitial?: number
}

const Parallax = ({ children, offset = 100, offsetInitial = 0 }: Props) => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [offsetInitial, -offset]
  )
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => {
    const element = ref.current

    const onResize = () => {
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset
        )
      }
      setClientHeight(window.innerHeight)
    }

    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [ref])

  return (
    <motion.div style={{ y, width: '100%', height: '100%' }} ref={ref}>
      {children}
    </motion.div>
  )
}

export default Parallax
