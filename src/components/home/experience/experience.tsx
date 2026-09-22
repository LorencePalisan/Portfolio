import { DatabaseIcon, HardDriveIcon, LayoutDashboardIcon, ZapIcon } from 'lucide-react'

import Timeline from '@/components/ui/timeline'
import ExperienceTimelineItem from '@/components/home/experience/experience-timeline-item'

const PROBLEMS_AND_SOLUTIONS = [
  {
    index: '01',
    icon: ZapIcon,
    category: 'Slow Websites & Downtime',
    problem: 'Your website slows down or crashes right when business is booming',
    solutionTags: ['Loads in under a second', 'Handles busy days automatically', 'Fast anywhere in the world'],
    outcome: 'Your site stays fast and online, even on your busiest days',
    description:
      'I build your website so a flood of visitors - from a sale, a feature in the press, or a viral post - never slows you down or knocks you offline.'
  },
  {
    index: '02',
    icon: DatabaseIcon,
    category: 'Customer & Business Data',
    problem: "Keeping track of customers, orders, and records is a mess, and IT upkeep isn't your job",
    solutionTags: ['Nothing to install or maintain', 'Automatic backups', 'Built to never lose a record'],
    outcome: 'All your business data stored safely, with nothing for you to maintain',
    description:
      'Customer accounts, orders, bookings, and records live in a properly organized, always-on system - no servers to patch, no maintenance bills, no surprises.'
  },
  {
    index: '03',
    icon: HardDriveIcon,
    category: 'Files, Photos & Storage',
    problem: 'Storing your photos, documents, and files gets expensive as your business grows',
    solutionTags: ['No surprise storage bills', 'Handles large files easily', 'Secure uploads for your team'],
    outcome: 'Store everything you need without watching your storage bill climb',
    description:
      'I set up file and media storage that scales with your business - product photos, documents, exports - without the runaway costs most providers charge as you grow.'
  },
  {
    index: '04',
    icon: LayoutDashboardIcon,
    category: 'Website Experience & Sales',
    problem: 'A slow, confusing website is quietly turning potential customers away',
    solutionTags: ['Simple, intuitive design', 'Fast on any device', 'Built to turn visitors into customers'],
    outcome: "A website that's easy to use and built to convert visitors into paying customers",
    description:
      'From your homepage to your checkout or booking flow, I design around how real customers actually browse and buy, so fewer people leave before taking action.'
  }
]

const ExperienceTimeline = () => {
  return (
    <Timeline
      data={PROBLEMS_AND_SOLUTIONS.map(({ index, ...item }) => ({
        index,
        content: <ExperienceTimelineItem {...item} />
      }))}
    />
  )
}

export default ExperienceTimeline
