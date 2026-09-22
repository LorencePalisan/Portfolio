import { Card, CardContent } from '@/components/ui/card'

const TECH_LOGOS = [
  { src: '/images/experience/img-03.webp', alt: 'HTML5' },
  { src: '/images/experience/img-20.webp', alt: 'CSS3' },
  { src: '/images/experience/img-07.webp', alt: 'JavaScript' },
  { src: '/images/experience/img-12.webp', alt: 'TypeScript' },
  { src: '/images/experience/img-16.webp', alt: 'React' },
  { src: '/images/experience/img-05.webp', alt: 'Cloudflare' },
  { src: '/images/experience/img-04.webp', alt: 'Tailwind CSS' },
  { src: '/images/experience/img-10.webp', alt: 'GitHub' }
]

const ActivityCard = () => {
  return (
    <Card className='ring-border gap-6 rounded-3xl p-6 shadow-lg lg:mb-16'>
      <CardContent className='space-y-2 p-0'>
        <p className='text-sm font-semibold'>Lorence Palisan</p>
        <p className='text-muted-foreground text-sm'>Tools I reach for when solving the problems below</p>
      </CardContent>

      <div className='border-border -mx-6 border-t' />

      <div className='min-w-0'>
        <div className='overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]'>
          <div className='flex w-max animate-[marquee_25s_linear_infinite] gap-8'>
            {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((logo, logoIndex) => (
              <div
                key={`${logo.src}-${logoIndex}`}
                className='bg-background flex size-16 shrink-0 items-center justify-center rounded-md'
              >
                <img src={logo.src} alt={logo.alt} className='size-10 grayscale' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ActivityCard
