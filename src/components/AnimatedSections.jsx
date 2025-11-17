import React, { useEffect, useRef } from 'react'

export const useInView = (options = {}) => {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.15, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options])
  return ref
}

export const Section = ({ className = '', children }) => {
  const ref = useInView()
  return (
    <section ref={ref} className={`reveal ${className}`}>
      {children}
    </section>
  )
}

export default Section
