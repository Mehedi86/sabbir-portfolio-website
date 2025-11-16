import React from 'react'

export default function Office() {
    return (
        <div className='max-w-6xl mx-auto pt-12 lg:flex items-center'>
            <div className='lg:w-1/2'>
                <h1 className='text-4xl font-bold pb-6'>Take a tour of my office</h1>
                <p className='text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!</p>
                <br />
                <p className='text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</p>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="relative w-full h-0 pb-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/RkYPGz91W-s"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

        </div>
    )
}
