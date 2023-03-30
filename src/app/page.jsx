import React from "react";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src= "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        />
        <HomeSearch />
      </div>
    </>
  );
}
