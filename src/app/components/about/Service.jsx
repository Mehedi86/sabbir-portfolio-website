import React from 'react'
import Subtitle from '../Subtitle'
import { services } from '@/app/constants'

export default function Service() {
    return (
        <div className='mt-24 max-w-6xl mx-auto'>
            <Subtitle
                title="My Services"
                subtitle="Offer to my clients"
            />
            <div className="grid md:grid-cols-3 gap-6 mt-12">
                {services.map((service) => (
                    <div key={service.id} className="bg-neutral-800 h-[212px] p-8 shadow-lg hover:border-b-2 border-[#DCC5B2]">
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                        <p className="text-neutral-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
