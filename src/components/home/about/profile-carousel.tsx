import { useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type ProfileCarouselProps = {
  images: string[]
  aspectRatio: number
}

const ProfileCarousel = ({ images, aspectRatio }: ProfileCarouselProps) => {
  const [index, setIndex] = useState(0)

  if (images.length === 0) return null

  const goPrev = () => setIndex(prev => (prev - 1 + images.length) % images.length)
  const goNext = () => setIndex(prev => (prev + 1) % images.length)

  return (
    <div
      style={{ aspectRatio }}
      className='relative w-full self-start overflow-hidden rounded-[24px] md:sticky md:top-24'
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt='profile images'
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-500',
            i === index ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}

      {images.length > 1 && (
        <>
          <div className='absolute top-15 right-12 z-20 flex gap-0.5'>
            {images.map((src, i) => (
              <span
                key={src}
                className={cn(
                  'block h-0.5 w-2.5 rounded-full bg-white transition-opacity duration-300',
                  i === index ? 'opacity-100' : 'opacity-50'
                )}
              />
            ))}
          </div>

          <button
            type='button'
            onClick={goPrev}
            aria-label='Previous image'
            className='group/prev absolute inset-y-0 left-0 flex w-1/4 items-center justify-start pl-3 outline-none'
          >
            <span className='absolute inset-0 bg-linear-to-r from-black/30 to-transparent mask-[linear-gradient(to_right,black,transparent)] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/prev:opacity-100' />
            <ChevronLeftIcon className='relative size-5 -translate-x-2 text-white opacity-50 transition-all duration-300 group-hover/prev:translate-x-0 group-hover/prev:opacity-100 [&-svg]:size-4' />
          </button>

          <button
            type='button'
            onClick={goNext}
            aria-label='Next image'
            className='group/next absolute inset-y-0 right-0 flex w-1/4 items-center justify-end pr-3 outline-none'
          >
            <span className='absolute inset-0 bg-linear-to-l from-black/30 to-transparent mask-[linear-gradient(to_left,black,transparent)] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/next:opacity-100' />
            <ChevronRightIcon className='relative size-5 translate-x-2 text-white opacity-50 transition-all duration-300 group-hover/next:translate-x-0 group-hover/next:opacity-100 [&-svg]:size-4' />
          </button>
        </>
      )}
    </div>
  )
}

export default ProfileCarousel
