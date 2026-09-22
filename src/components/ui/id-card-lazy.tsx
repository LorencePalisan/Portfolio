import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const IdCard = lazy(() => import('@/components/ui/id-card'))

type IdCardLazyProps = {
  frontImage: string
  className?: string
}

// The real IdCard uses react-three-fiber/WebGL (can't render during SSR) and is heavy on its
// own (~1MB gzipped, mostly the @react-three/rapier physics engine). This wrapper is SSR-safe
// and only fetches + mounts the real component once it scrolls into view, so pages where it's
// hidden by CSS (e.g. mobile, via the max-lg:hidden in the className passed in) never pay the
// download/parse/execute cost at all — the IntersectionObserver never fires for a display:none
// element.
const IdCardLazy = ({ frontImage, className }: IdCardLazyProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = containerRef.current

    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {isVisible && (
        <Suspense fallback={null}>
          <IdCard frontImage={frontImage} className='size-full' />
        </Suspense>
      )}
    </div>
  )
}

export default IdCardLazy
