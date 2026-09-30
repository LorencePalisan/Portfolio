import { useState } from 'react'

import { format } from 'date-fns'
import { ArrowLeftIcon, CheckIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import ChooseTimeStep from '@/components/home/select-service/choose-time-step'
import DetailsStep from '@/components/home/select-service/details-step'

const TOTAL_STEPS = 3

const STEP_TITLES: Record<number, string> = {
  1: 'Select Service',
  2: 'Choose Time',
  3: 'Your Details'
}

const SERVICES = [
  {
    id: 'app-development',
    title: 'Web & Mobile App Development',
    price: 'Custom quote',
    duration: '30 min call',
    description: 'Web apps, iOS & Android apps, and business tools'
  },
  {
    id: 'performance',
    title: 'Performance & Speed Optimization',
    price: 'Custom quote',
    duration: '30 min call',
    description: 'Core Web Vitals, render tuning, and asset optimization'
  },
  {
    id: 'api-backend',
    title: 'API Integration & Backend Refactoring',
    price: 'Custom quote',
    duration: '30 min call',
    description: 'Third-party integrations, database fixes, and bug fixes'
  },
  {
    id: 'cms-ecommerce',
    title: 'CMS & E-Commerce Engineering',
    price: 'Custom quote',
    duration: '30 min call',
    description: 'Custom themes, plugin extensions, and headless setups'
  }
]

const ServiceStepCard = () => {
  const [step, setStep] = useState(1)
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookingName, setBookingName] = useState<string | null>(null)
  const [isSubmittingDetails, setIsSubmittingDetails] = useState(false)

  const selectedService = SERVICES.find(service => service.id === selectedServiceId)

  const canAdvance = step === 1 ? Boolean(selectedServiceId) : step === 2 ? Boolean(selectedDate && selectedTime) : true

  const handleReset = () => {
    setStep(1)
    setSelectedServiceId(null)
    setSelectedDate(undefined)
    setSelectedTime(null)
    setBookingName(null)
  }

  if (bookingName) {
    return (
      <div className='bg-card relative flex min-h-125 flex-col items-center justify-center space-y-4 rounded-3xl p-6 text-center shadow-sm'>
        <span className='bg-accent mb-7 flex size-18 shrink-0 items-center justify-center rounded-full text-white'>
          <CheckIcon className='size-8' strokeWidth={3} />
        </span>

        <div className='mb-8 space-y-3'>
          <h3 className='text-[24px] font-medium'>Request Received</h3>
          <p className='text-foreground text-[15px]'>
            Thank you, {bookingName}. Your {selectedService?.title} call request is set for{' '}
            {selectedDate && format(selectedDate, 'EEE, MMM d')} at {selectedTime}. I&apos;ll follow up by email to
            confirm.
          </p>
        </div>

        <Button
          variant='outline'
          className='bg-card hover:bg-background h-12.75 w-39.75 rounded-[24px] text-[15px] font-medium'
          onClick={handleReset}
        >
          Request Another
        </Button>
      </div>
    )
  }

  return (
    <div className='bg-card relative overflow-hidden rounded-3xl shadow-sm'>
      <div className='from-accent relative bg-linear-to-br to-red-600 px-6 pt-6 pb-12'>
        <div className='relative z-10 flex items-start justify-between'>
          <div>
            <p className='text-primary-foreground dark:text-primary text-xl font-semibold'>{STEP_TITLES[step]}</p>
            <p className='text-primary-foreground dark:text-primary text-sm'>
              Step {step} of {TOTAL_STEPS}
            </p>
          </div>

          <div className='flex items-center gap-1.5'>
            {Array.from({ length: TOTAL_STEPS }, (_, index) => index + 1).map(dotStep => (
              <span
                key={dotStep}
                className={cn(
                  'bg-primary-foreground dark:bg-primary h-1.5 rounded-full transition-all',
                  dotStep === step ? 'w-6 opacity-100' : 'w-1.5 opacity-40'
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='bg-card relative z-10 -mt-6 space-y-4 rounded-t-3xl p-6'>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => setStep(current => current - 1)}
          className={cn('hover:bg-card -ml-2.5 gap-1.5 px-2.5', step === 1 && 'invisible')}
        >
          <ArrowLeftIcon className='size-4' />
          Back
        </Button>

        <ScrollArea className='h-83'>
          {step === 1 && (
            <div className='space-y-3'>
              {SERVICES.map(service => {
                const selected = selectedServiceId === service.id

                return (
                  <Button
                    key={service.id}
                    variant='outline'
                    onClick={() => setSelectedServiceId(service.id)}
                    className={cn(
                      'bg-card hover:bg-card h-auto w-full items-start justify-start gap-3 rounded-xl p-4 text-left whitespace-normal',
                      selected
                        ? 'border-accent bg-(--background-darker) hover:bg-(--background-darker)'
                        : 'border-border'
                    )}
                  >
                    <span
                      className={cn(
                        'mt-2 size-2.5 shrink-0 rounded-full',
                        selected ? 'bg-accent' : 'bg-muted-foreground'
                      )}
                    />
                    <span className='flex-1 space-y-1'>
                      <span className='flex items-center justify-between gap-2'>
                        <span className='text-base font-semibold'>{service.title}</span>
                        <span className={cn('text-card-foreground font-semibold', selected && 'text-accent')}>
                          {service.price}
                        </span>
                      </span>
                      <span className='text-muted-foreground block text-xs'>{service.duration}</span>
                      <span className='text-muted-foreground block text-sm'>{service.description}</span>
                    </span>
                  </Button>
                )
              })}
            </div>
          )}

          {step === 2 && (
            <ChooseTimeStep
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          )}

          {step === 3 && (
            <DetailsStep
              service={selectedService}
              date={selectedDate}
              time={selectedTime}
              onSuccess={setBookingName}
              onSubmittingChange={setIsSubmittingDetails}
            />
          )}
        </ScrollArea>

        <div className='flex min-h-21 flex-col justify-center space-y-2'>
          {step < 3 ? (
            <div className='flex justify-center'>
              <Button
                variant='secondary'
                size='icon'
                aria-label='Next step'
                disabled={!canAdvance}
                onClick={() => setStep(current => Math.min(TOTAL_STEPS, current + 1))}
                className={cn(
                  'bg-accent hover:bg-accent size-14 rounded-full text-white',
                  !canAdvance && 'bg-muted/50 cursor-not-allowed text-white opacity-100'
                )}
              >
                <ChevronRightIcon className='size-6' />
              </Button>
            </div>
          ) : (
            <>
              <Button
                type='submit'
                form='details-form'
                disabled={isSubmittingDetails}
                className='bg-accent hover:bg-accent h-14 w-full rounded-3xl text-base font-medium text-white'
              >
                {isSubmittingDetails ? 'Sending...' : 'Request Call'}
              </Button>
              <p className='text-muted-foreground text-center text-xs'>I respond to every request within 24 business hours.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceStepCard
