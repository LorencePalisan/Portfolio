import { useState } from 'react'
import type { FormEvent } from 'react'

import { format } from 'date-fns'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitLead } from '@/lib/submit-lead'

type DetailsStepProps = {
  service: { title: string; price: string; duration: string } | undefined
  date: Date | undefined
  time: string | null
  onSuccess: (name: string) => void
  onSubmittingChange: (isSubmitting: boolean) => void
}

const DetailsStep = ({ service, date, time, onSuccess, onSubmittingChange }: DetailsStepProps) => {
  const [honeypot, setHoneypot] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')

  const serviceValue = service ? `${service.title} · ${service.duration}` : '—'
  const dateTimeValue = date && time ? `${format(date, 'EEE, MMM d')} · ${time}` : '—'
  const priceValue = service?.price ?? '—'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmittingChange(true)

    try {
      await submitLead({
        form: 'call-request', name, email, message: notes,
        service: serviceValue, requestedDate: date ? format(date, 'yyyy-MM-dd') : '',
        requestedTime: time ?? '', price: priceValue, website: honeypot
      })

      toast.success("Request received — I'll follow up by email to confirm.")
      onSuccess(name)
      setName('')
      setEmail('')
      setNotes('')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Please try again or email me directly.')
    } finally {
      onSubmittingChange(false)
    }
  }

  return (
    <div className='space-y-4'>
      <div className='space-y-3 rounded-xl bg-(--background-darker) p-4'>
        <div className='flex items-start gap-2'>
          <span className='bg-accent mt-1.5 size-2.5 shrink-0 rounded-full' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>Service</p>
            <p className='text-sm font-semibold'>{serviceValue}</p>
          </div>
        </div>

        <div className='flex items-start gap-2'>
          <span className='mt-1.5 size-2.5 shrink-0 rounded-full bg-sky-600' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>Date & Time</p>
            <p className='text-sm'>{dateTimeValue}</p>
          </div>
        </div>

        <div className='flex items-start gap-2'>
          <span className='bg-accent mt-1.5 size-2.5 shrink-0 rounded-full' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>Price</p>
            <p className='text-accent text-sm font-bold'>{priceValue}</p>
          </div>
        </div>
      </div>

      <form id='details-form' onSubmit={handleSubmit} className='space-y-4'>
        <input type='text' name='website' aria-hidden='true' tabIndex={-1} autoComplete='off' className='hidden' value={honeypot} onChange={event => setHoneypot(event.target.value)} />
        <div className='space-y-2'>
          <Label htmlFor='details-name'>Full Name *</Label>
          <Input
            id='details-name'
            placeholder='Your name'
            className='h-14.5 rounded-[16px] px-4.5 focus-visible:ring-0'
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='details-email'>Email Address *</Label>
          <Input
            id='details-email'
            type='email'
            placeholder='you@example.com'
            className='h-14.5 rounded-[16px] px-4.5 focus-visible:ring-0'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='details-notes'>Project brief (optional)</Label>
          <Textarea
            id='details-notes'
            placeholder='What do you need built, and what is your estimated budget?'
            className='min-h-20 resize-none rounded-[16px] px-4.5 focus-visible:ring-0'
            value={notes}
            onChange={event => setNotes(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default DetailsStep
