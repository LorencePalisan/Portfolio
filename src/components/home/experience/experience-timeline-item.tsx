import type { LucideIcon } from 'lucide-react'
import { ArrowRightIcon, WrenchIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

type ExperienceTimelineItemProps = {
  icon: LucideIcon
  category: string
  problem: string
  solutionTags: string[]
  outcome: string
  description: string
}

const ExperienceTimelineItem = ({
  icon: Icon,
  category,
  problem,
  solutionTags,
  outcome,
  description
}: ExperienceTimelineItemProps) => {
  return (
    <div className='space-y-4'>
      <div className='mb-6 flex items-center gap-3'>
        <div className='bg-card flex size-13.5 shrink-0 items-center justify-center rounded-md sm:size-14'>
          <Icon className='text-accent size-7' />
        </div>
        <div>
          <p className='text-muted-foreground'>{category}</p>
          <h3 className='text-lg font-medium sm:text-[26px] sm:leading-8'>{problem}</h3>
        </div>
      </div>

      <div className='mb-1.5 space-y-3 text-sm sm:text-base'>
        <div className='flex flex-wrap items-center gap-2'>
          <WrenchIcon className='text-muted-foreground size-6' />
          {solutionTags.map(tag => (
            <Badge
              key={tag}
              variant='secondary'
              className='text-foreground h-5.5 rounded-full bg-(--background-darker)'
            >
              {tag}
            </Badge>
          ))}
        </div>

        <p className='flex items-start gap-2 font-medium'>
          <ArrowRightIcon className='text-accent mt-0.5 size-5 shrink-0' />
          <span className='text-base font-medium'>{outcome}</span>
        </p>
      </div>

      <p className='text-muted-foreground ml-8 max-w-145'>{description}</p>
    </div>
  )
}

export default ExperienceTimelineItem
