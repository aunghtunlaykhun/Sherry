import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
        <div className="absolut -left-4 top-1">
            <span className='flex size-[11px]'>
                <span className='absolute inline-flex w-full h-full animate-ping rounded-full bg-primary opacity-75'>
                </span>
                <span className='relative inline-flex size-[11px] rounded-full bgprimary'></span>
            </span>
        </div>
    </div>
  )
}

export default Ping