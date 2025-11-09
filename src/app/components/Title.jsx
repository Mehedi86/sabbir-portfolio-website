import React from 'react'
import TitleAnimation from './TitleAnimation'

export default function Title({title, subTitle}) {
    return (
        <div className="space-y-2">
            <p className="text-lg text-stone-200 text-center">{title}</p>
            <h1 className="text-4xl font-bold text-center">{subTitle}</h1>
            <TitleAnimation />
        </div>
    )
}
