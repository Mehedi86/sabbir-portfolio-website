'use client'

import Title from '@/app/components/Title'
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const items = [
    { id: 1, category: "Brand", color: "bg-neutral-600" },
    { id: 2, category: "Brand", color: "bg-neutral-600" },
    { id: 3, category: "Brand", color: "bg-neutral-600" },

    { id: 4, category: "Brand", color: "bg-neutral-600" },
    { id: 5, category: "Design", color: "bg-neutral-600" },
    { id: 6, category: "Design", color: "bg-neutral-600" },

    { id: 7, category: "Photos", color: "bg-neutral-600" },
    { id: 8, category: "Photos", color: "bg-neutral-600" },
    { id: 9, category: "Photos", color: "bg-neutral-600" },

    { id: 10, category: "Brand", color: "neutral-600" },
];

export default function page() {
    const [showWipe, setShowWipe] = useState(true);
    const tabs = ["All", "Brand", "Design", "Photos"];
    const [activeTab, setActiveTab] = useState("All");
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setShowWipe(false), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowWipe(true);
        setTimeout(() => router.push('/'), 1000);
    };

    const filtered =
        activeTab === "All"
            ? items
            : items.filter((item) => item.category === activeTab);

    return (
        <>
            {/* Overlay wipe animation */}
            <div
                className={`fixed inset-0 z-50 bg-black transition-transform duration-1000 ease-in-out ${
                    showWipe ? 'translate-y-0' : '-translate-y-full'
                }`}
            ></div>

            {/* Modal Container */}
            <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm overflow-y-auto">
                <div className="min-h-[1200px] py-8 px-4 md:p-16 text-white bg-[#111] relative">
                    
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>

                    {/* Main Content */}
                    <div className="max-w-6xl mx-auto">
                        <Title subTitle="Portfolio" title="Showcasing some of my best work" />

                        {/* Tabs */}
                        <div className="flex justify-center mt-6">
                            <div className="flex gap-6 mb-10">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-1 transition-all ${
                                            activeTab === tab
                                                ? "text-[#DCC5B2] border-b-2 border-[#DCC5B2]"
                                                : "text-neutral-400 hover:text-white cursor-pointer"
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cards / Blocks */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                            {filtered.map((item) => (
                                <div
                                    key={item.id}
                                    className={`h-72 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-[1.02] ${item.color}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
