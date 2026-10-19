import { DatabaseIcon, HardDriveIcon, LayoutDashboardIcon, ZapIcon } from 'lucide-react'

import Timeline from '@/components/ui/timeline'
import ExperienceTimelineItem from '@/components/home/experience/experience-timeline-item'

const PROBLEMS_AND_SOLUTIONS = [
  {
    index: '01',
    icon: ZapIcon,
    category: 'Website & Web App Development',
    problem: 'The business had outgrown spreadsheets and off-the-shelf tools that no longer fit how the team works',
    solutionTags: ['Custom website or web app', 'Built around your workflow', 'Launch-ready MVP'],
    outcome: 'A focused MVP shipped in weeks, not months, that the team actually uses',
    description:
      'I scope the smallest version that solves the real problem, build it as a website or web app, and launch it quickly - so you get value early and grow it from real feedback.'
  },
  {
    index: '02',
    icon: LayoutDashboardIcon,
    category: 'Performance & Speed Optimization',
    problem: 'A slow app or website was quietly costing sales, sign-ups, and search rankings',
    solutionTags: ['Core Web Vitals fixes', 'Render tuning', 'Asset optimization'],
    outcome: 'Faster pages, better Core Web Vitals scores, and fewer visitors leaving before they buy',
    description:
      "I measure where your pages lose time, fix what's slowing them down, and verify the results - so every visitor gets a fast experience on any device."
  },
  {
    index: '03',
    icon: DatabaseIcon,
    category: 'API Integration & Backend Refactoring',
    problem: 'Disconnected tools, fragile integrations, and recurring bugs were eating up hours every week',
    solutionTags: ['Third-party integrations', 'Database optimization', 'Bug fixes'],
    outcome: 'Systems that talk to each other reliably, with less manual work and fewer errors',
    description:
      'I connect your payment, CRM, email, and booking tools, clean up slow queries and brittle code, and document everything so your data flows without constant firefighting.'
  },
  {
    index: '04',
    icon: HardDriveIcon,
    category: 'CMS & E-Commerce Engineering',
    problem: "The store or CMS couldn't do what the business needed without awkward workarounds",
    solutionTags: ['Custom theme functionality', 'Plugin extensions', 'Headless setups'],
    outcome: 'A store or content site your team can manage easily, built to convert',
    description:
      'I extend your CMS or e-commerce platform with the features you need - or move it to a fast headless setup - so updating content and selling online stays simple.'
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
