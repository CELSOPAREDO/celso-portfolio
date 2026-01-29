import { useEffect, useRef, useState } from 'react'

export default function useInView(options = {}){
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(()=>{
    const node = ref.current
    if(!node) return
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach(entry => {
          if(entry.isIntersecting){
            setInView(true)
            if(options.once) observer.unobserve(node)
          } else {
            if(!options.once) setInView(false)
          }
        })
      },
      { threshold: options.threshold ?? 0.1 }
    )
    observer.observe(node)
    return ()=>observer.disconnect()
  }, [ref.current])

  return [ref, inView]
}
