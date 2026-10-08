type LeadSubmission = {
  form: 'contact' | 'call-request'
  name: string
  email: string
  service: string
  message?: string
  requestedDate?: string
  requestedTime?: string
  price?: string
  website?: string
}

/** Shared by every website form. No CRM credentials belong in the browser. */
export async function submitLead(values: LeadSubmission) {
  const endpoint = import.meta.env.PUBLIC_CRM_FORM_ENDPOINT

  if (!endpoint) throw new Error('The contact form is not configured yet. Please email me directly.')
  const params = new URLSearchParams(window.location.search)

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...values,
      page: `${window.location.origin}${window.location.pathname}`,
      referrer: document.referrer ? new URL(document.referrer).origin : '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      utmSource: params.get('utm_source') ?? '',
      utmMedium: params.get('utm_medium') ?? '',
      utmCampaign: params.get('utm_campaign') ?? ''
    }),
    signal: AbortSignal.timeout(20000)
  })

  const result = await response.json().catch(() => null)

  if (!response.ok || result?.success !== true) {
    throw new Error(result?.message || 'Unable to send your request. Please try again.')
  }
}
