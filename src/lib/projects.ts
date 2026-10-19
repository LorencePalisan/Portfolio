export type PortfolioProject = {
  slug: string
  title: string
  url: string
  category: string
  engagement?: 'direct' | 'agency' | 'employment' | 'personal'
  myRole?: string
  summary: string
  responsibilities: string[]
  technologies: string[]
  screenshotDesktop?: string
  screenshotMobile?: string
  outcome?: string // evidence-backed, not invented
  credit?: string
  caseStudySlug?: string
  publishApproved: boolean
  featured: boolean
}

// Display order follows the array. Entries stay hidden until publishApproved is true -
// fill in myRole, responsibilities, technologies and credit with what you actually did first.
const PROJECTS: PortfolioProject[] = [
  {
    slug: 'titan-freight',
    title: 'Titan Freight',
    url: 'https://titanfreight.com.au/',
    category: 'Business Website',
    engagement: 'employment',
    summary:
      'Australian freight and logistics company website presenting container transport services and ways to request a quote.',
    responsibilities: [],
    technologies: [],
    credit: undefined, // e.g. 'Completed as part of the [company] team'
    publishApproved: true,
    featured: false
  },
  {
    slug: 'ayalaland-logistics',
    title: 'AyalaLand Logistics',
    url: 'https://www.ayalalandlogistics.com/',
    category: 'Corporate Website',
    engagement: 'employment',
    summary:
      'Corporate website for an industrial parks and logistics facilities business, with company, investor relations and sustainability content.',
    responsibilities: [],
    technologies: [],
    publishApproved: true,
    featured: true
  },
  {
    slug: 'allhc-technoparks',
    title: 'ALLHC Technoparks',
    url: 'https://www.technoparks.com.ph/',
    category: 'Corporate Website',
    engagement: 'employment',
    summary: 'Industry-focused website showcasing industrial park locations, investor information and inquiry channels.',
    responsibilities: [],
    technologies: [],
    publishApproved: true,
    featured: true
  },
  {
    slug: 'alviera-country-club',
    title: 'Alviera Country Club',
    url: 'https://acc.alviera.ph/',
    category: 'Business Website',
    engagement: 'employment',
    summary: 'Information site for club amenities, membership, announcements and contact details.',
    responsibilities: [],
    technologies: [],
    publishApproved: true,
    featured: true
  },
  {
    slug: 'marla-madness',
    title: 'Marla Madness',
    url: 'https://www.marlamadness.com/',
    category: 'Food Brand Website',
    engagement: 'employment',
    summary:
      'Website for a Filipino food brand offering handcrafted marinades, cooking sauces, and condiments that make authentic Filipino flavors accessible to everyone.',
    responsibilities: [],
    technologies: [],
    publishApproved: true,
    featured: false
  }
]

export function getPublishedProjects({ featuredOnly = false } = {}): PortfolioProject[] {
  return PROJECTS.filter(project => project.publishApproved && (!featuredOnly || project.featured))
}
