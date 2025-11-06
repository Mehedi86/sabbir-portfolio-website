import Image from "next/image";
import SocialBar from "./components/SocialBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-end min-h-[calc(100vh-100px)]">
      <div className="flex justify-center items-end">
        <div className="flex flex-col space-y-4 pb-60">
          <h1 className="text-6xl font-extrabold">Sabbir Ahmed</h1>
          <p className="text-center text-2xl ">I'm a Digital Marketer</p>
        </div>
      </div>
      <SocialBar />
    </div>
  );
}
