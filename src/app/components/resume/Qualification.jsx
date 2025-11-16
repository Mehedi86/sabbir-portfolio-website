import React from 'react'

export default function Qualification() {
    return (
        <div className="max-w-6xl mx-auto mt-12 lg:flex gap-12">
            {/* left side */}
            <div className="lg:w-1/2">
                <h1 className="text-3xl font-semibold">Education</h1>

                <div className="border-l-2 border-[#DCC5B2] mt-6 relative bg-neutral-900">
                    <div className="arrow-clip absolute top-8"></div>
                    <div className="arrow-clip absolute top-68 md:top-68 lg:top-52"></div>
                    <div className="arrow-clip absolute top-128 md:top-128 lg:top-96"></div>

                    {/* Education Item 1 */}
                    <div className="px-12 py-6 h-60 lg:h-fit">
                        <h1 className="text-2xl">Bachelor Degree</h1>
                        <div className="space-y-4 text-neutral-400 pt-2">
                            <p>Daffodil International University / 2021 - 2024</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>
                    </div>

                    {/* Education Item 2 */}
                    <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                        <h1 className="text-2xl">Diploma Degree</h1>
                        <div className="space-y-4 text-neutral-400 pt-2">
                            <p>Kushtia Polytechnic Institute / 2016 - 2020 </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>
                    </div>

                    {/* Education Item 3 */}
                    <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                        <h1 className="text-2xl">Secondary School Certificate</h1>
                        <div className="space-y-4 text-neutral-400 pt-2">
                            <p>Police Line School and College Kushtia / 2011 - 2016</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
                <h1 className="text-3xl font-semibold">Experience</h1>

                <div className="border-l-2 border-[#DCC5B2] mt-6 relative bg-neutral-900">
                    <div className="arrow-clip absolute top-8"></div>
                    <div className="arrow-clip absolute top-68 md:top-68 lg:top-52"></div>
                    <div className="arrow-clip absolute top-128 md:top-128 lg:top-96"></div>

                    {/* Experience Item 1 */}
                    <div className="px-12 py-6 h-60 lg:h-fit">
                        <h1 className="text-2xl">Client Manager</h1>
                        <div className="space-y-4 text-neutral-400 pt-2">
                            <p> IMBD Agency Ltd / 2025-Present</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                        <h1 className="text-2xl">Jr. Digital Marketing Executive</h1>
                        <div className="space-y-4 text-neutral-400 pt-2">
                            <p>Ads Pillar / 2024 - 2025</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>
                    </div>

                    {/* Education Item 3 */}
                    <div className="px-12 py-6 border-t border-neutral-800 h-60 lg:h-fit">
                        <h1 className="text-2xl">N/A</h1>
                        <div className="space-y-4 text-neutral-400 pt-2">
                            <p>Works on personal projects</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
