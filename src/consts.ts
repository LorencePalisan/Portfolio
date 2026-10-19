// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Lorence Palisan - Websites & Custom Web Applications for Growing Businesses'
export const SITE_DESCRIPTION =
  'Lorence Palisan helps businesses and startups build, maintain, and improve websites and web applications using WordPress, React, and modern cloud technologies - from initial development to long-term support.'

export const SITE_URL = import.meta.env.SITE_URL || 'http://localhost:4321/'

export const SITE_METADATA = {
  title: {
    template: '%s - Lorence Palisan',
    default: SITE_TITLE
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Lorence Palisan',
    'freelance software developer',
    'freelance web developer',
    'WordPress developer',
    'website maintenance',
    'freelance full-stack developer',
    'Cloudflare Workers developer',
    'Cloudflare D1',
    'Cloudflare R2',
    'edge computing',
    'serverless web applications',
    'React developer',
    'TypeScript developer',
    'REST API development'
  ],
  authors: [{ name: 'Lorence Palisan', url: SITE_URL }],
  creator: 'Lorence Palisan',
  publisher: 'Lorence Palisan',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Lorence Palisan',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    creator: '',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social links — add your real profile URLs here (e.g. github: 'https://github.com/<you>').
// Icons only render for the entries you fill in. Use 'mailto:you@example.com' for email.
export const SOCIAL_LINKS: Partial<Record<'github' | 'linkedin' | 'instagram' | 'twitter' | 'email', string>> = {}

// Business information for structured data
export const COMPANY_INFO = {
  name: 'Lorence Palisan',
  legalName: 'Lorence Palisan',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  sameAs: Object.values(SOCIAL_LINKS).filter(url => url && !url.startsWith('mailto:'))
}
