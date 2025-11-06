import { Twitter, Facebook, Linkedin, Github, Instagram } from "lucide-react";
import React from 'react'

export default function SocialBar() {
    return (
        <div className=" flex flex-col items-end gap-4 p-8">
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition">
                <Twitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
                <Facebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition">
                <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-gray-400 transition">
                <Github size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
                <Instagram size={24} />
            </a>
        </div>
    )
}
