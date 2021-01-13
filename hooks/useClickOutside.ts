import { useRef, useEffect } from "react"

const useClickOutside = (
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const node = useRef() as React.MutableRefObject<any>

  const handleClick = (e: MouseEvent) => {
    if (!node.current.contains(e.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return node
}

export default useClickOutside
