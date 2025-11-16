import React from 'react'
import Subtitle from '../Subtitle'
import { skills } from '@/app/constants'

export default function Skills() {
    return (
        <div className='max-w-6xl mx-auto mt-24'>
            <Subtitle subtitle="My level of knowledge in some tools" title="My Skills" />

            <div className='lg:grid grid-cols-2 gap-8 my-12'>
                {skills.map((skill) => (
                    <div key={skill.title} className='mb-6 lg:mb-0'>
                        <div className="flex justify-between text-neutral-400 mb-1">
                            <span>{skill.title}</span>
                            <span>{skill.percent}%</span>
                        </div>

                        <div className="w-full h-3 bg-neutral-700 rounded">
                            <div
                                className="h-3 bg-[#DCC5B2] skill-bar"
                                style={{ width: `${skill.percent}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
