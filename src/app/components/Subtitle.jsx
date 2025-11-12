import React from 'react'

export default function Subtitle({title, subtitle}) {
  return (
    <div className='space-y-4'>
        <p className='text-neutral-400'>{subtitle}</p>
        <h1 className='text-4xl font-bold'>{title}</h1>
    </div>
  )
}
