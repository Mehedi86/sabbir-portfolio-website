import React from 'react'
import Subtitle from '../Subtitle'
import { testimonials } from '@/app/constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
    return (
        <div className='max-w-6xl mx-auto mt-24'>
            <Subtitle title="Testimonials" subtitle="What my clients think about me" />
            <div className="px-2 md:px-0 mt-12">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true} // center slides
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={4000} // slow sliding animation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((t) => (
                        <SwiperSlide key={t.id}>
                            <div className="bg-neutral-800 p-6 shadow-md h-[200px]">
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <img src="/userIcon.png" className='w-10 h-10 rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4>{t.name}</h4>
                                            <p className='text-neutral-400 text-sm'>{t.company}</p>
                                        </div>
                                    </div>
                                    <FaQuoteRight className='text-[#DCC5B2]' size={32}/>
                                </div>
                                <div className='mt-6'>
                                    <p className='text-neutral-400'>{t.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
