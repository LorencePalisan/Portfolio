import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

// The work link only renders once at least one project is approved, so it never points at an empty section
const HeroCta = ({ showWorkLink = false }: { showWorkLink?: boolean }) => {
  return (
    <div className='flex flex-wrap items-center gap-2.5 pt-2'>
      {showWorkLink && (
        <Button
          className='bg-accent hover:bg-accent text-accent-foreground h-11 rounded-full px-5 text-base shadow-sm'
          render={<a href='/#projects'>View My Work</a>}
          nativeButton={false}
        />
      )}
      <Button
        variant='outline'
        className='hover:bg-card bg-card dark:bg-card hover:text-accent group/button h-11 gap-2.5 rounded-full pr-4 pl-4 text-base shadow-sm transition-[padding] duration-300 hover:pl-2'
        render={
          <a href='/#select-service'>
            <span className='bg-accent relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/button:size-6.5'>
              <ArrowRightIcon className='text-accent-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100' />
            </span>
            Discuss Your Project
          </a>
        }
        nativeButton={false}
      />
    </div>
  )
}

export default HeroCta
