'use client'

import Image from "next/image";
import SocialBar from "./components/SocialBar";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-120px)] relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col space-y-4 text-white pb-46">
          <h1 className="text-7xl font-extrabold">Sabbir Ahmed</h1>
          <p className="text-center text-3xl ">I'm a {""}
            <ReactTyped
            strings={["Digital Marketer", "Designer", "Content Creator"]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={2000}
            loop
          />
          </p>
        </div>
      </div>
      <SocialBar />
    </div>
  );
}
