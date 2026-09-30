import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { MinusIcon, PlusIcon } from 'lucide-react'

import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion'

const SERVICES = [
  {
    title: 'Web & Mobile App Development',
    image: '/images/services/thumb-01.webp',
    duration: 'Best for new products, MVPs, and internal tools',
    tools: ['Responsive web apps', 'iOS & Android apps', 'Landing pages & business tools'],
    description:
      'From a high-converting landing page to a full web or mobile app, I build what your business needs to win customers and save your team time - fast, reliable, and easy to grow.'
  },
  {
    title: 'Performance & Speed Optimization',
    image: '/images/services/thumb-02.webp',
    duration: 'Best for slow sites that are losing visitors',
    tools: ['Core Web Vitals remediation', 'Render tuning', 'Asset optimization'],
    description:
      'Faster apps and pages mean more sales, more sign-ups, and better search rankings. I find what is slowing your app or site down, fix it, and show you the before-and-after results.'
  },
  {
    title: 'API Integration & Backend Refactoring',
    image: '/images/services/thumb-03.webp',
    duration: 'Best for disconnected tools and recurring bugs',
    tools: ['Third-party integrations', 'Database optimization', 'Bug fixes'],
    description:
      'I connect the tools you already rely on, speed up slow databases, and clean up fragile code - so your systems work together and stop breaking.'
  },
  {
    title: 'CMS & E-Commerce Engineering',
    image: '/images/services/thumb-04.webp',
    duration: 'Best for online stores and content-heavy sites',
    tools: ['Custom theme functionality', 'Plugin extensions', 'Headless setups'],
    description:
      'I add the features your store or CMS is missing, or move it to a fast headless setup, so your team can manage content easily and customers can check out without friction.'
  },
  {
    title: 'Post-Launch Support & Maintenance',
    image: '/images/services/thumb-05.webp',
    duration: 'Best for keeping your app healthy after launch',
    tools: ['Updates & fixes', 'Monitoring', 'Ongoing improvements'],
    description:
      'Launch is not the finish line. I stay available to fix issues, keep things up to date, and keep improving your app as your business grows.'
  }
]

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [displayedIndex, setDisplayedIndex] = useState<number | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.5 })

  const offsetX = useTransform(springX, value => `calc(${value}px - 50%)`)
  const offsetY = useTransform(springY, value => `calc(${value}px - 50%)`)

  const rawTilt = useMotionValue(-8)
  const tilt = useSpring(rawTilt, { stiffness: 300, damping: 20 })

  useEffect(() => {
    rawTilt.set(hoveredIndex !== null && hoveredIndex % 2 === 1 ? 8 : -8)
  }, [hoveredIndex, rawTilt])

  const handleServiceMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setDisplayedIndex(index)
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()

    mouseX.set(event.clientX - bounds.left)
    mouseY.set(event.clientY - bounds.top)
  }

  const handleContainerMouseEnter = () => {
    if (!containerRef.current) return

    containerRef.current.style.setProperty('cursor', 'none', 'important')
    containerRef.current
      .querySelectorAll('button')
      .forEach(button => button.style.setProperty('cursor', 'none', 'important'))
  }

  const handleContainerMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.removeProperty('cursor')
      containerRef.current.querySelectorAll('button').forEach(button => button.style.removeProperty('cursor'))
    }

    setHoveredIndex(null)
  }

  return (
    <section id='services' className='border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>Services</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>What I can build for you</h2>
        </div>

        <div
          ref={containerRef}
          className='relative mx-auto'
          onMouseMove={handleMouseMove}
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
        >
          <Accordion className='divide-y'>
            {SERVICES.map((service, index) => (
              <AccordionItem key={service.title} value={index} onMouseEnter={() => handleServiceMouseEnter(index)}>
                <AccordionTrigger className='text-primary items-center border-0 py-4 text-lg hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden sm:text-xl lg:text-[26px]'>
                  <span>
                    {index + 1}. {service.title}
                  </span>
                  <span className='bg-card relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full'>
                    <PlusIcon className='text-accent size-4 rotate-0 opacity-100 transition-all duration-300 group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:opacity-0' />
                    <MinusIcon className='text-accent absolute size-4 -rotate-90 opacity-0 transition-all duration-300 group-aria-expanded/accordion-trigger:rotate-0 group-aria-expanded/accordion-trigger:opacity-100' />
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='mt-2 space-y-4'>
                    <p className='text-sm font-medium tracking-wide uppercase'>{service.duration}</p>
                    <p className='mb-1 flex flex-wrap items-center gap-3 text-sm font-medium tracking-wide uppercase'>
                      {service.tools.map((tool, toolIndex) => (
                        <span key={tool} className='flex items-center gap-2'>
                          {tool}
                          {toolIndex < service.tools.length - 1 && <span className='text-accent'>✦</span>}
                        </span>
                      ))}
                    </p>
                    <p className='text-muted-foreground text-base'>{service.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            style={{ x: offsetX, y: offsetY, rotate: tilt, opacity: hoveredIndex === null ? 0 : 1 }}
            className='dark:bg-muted-foreground/50 pointer-events-none absolute top-0 left-0 z-10 hidden w-44 rounded-lg bg-white p-1 shadow-xl transition-opacity duration-200 sm:block'
          >
            {displayedIndex !== null && (
              <img
                src={SERVICES[displayedIndex].image}
                alt='Accordion Thumb'
                className='h-auto w-full rounded-lg object-cover'
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
