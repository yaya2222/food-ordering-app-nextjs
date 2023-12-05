import Image from "next/image";
import React from "react";
import MenuIetm from "../menu/MenuIetm";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full h-full justify-start">
        <div className="absolute left-0 -top-[70px] -z-10">
          <Image src="/sallad1.png" alt="sallad" width={109} height={189} />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image src="/sallad2.png" alt="sallad" width={107} height={195} />
        </div>
      </div>
      <div className="text-center mb-4">
        <h3 className="uppercase text-gray-600 font-semibold leading-3">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
       <MenuIetm />
       <MenuIetm />
       <MenuIetm />
       <MenuIetm />
       <MenuIetm />
       <MenuIetm />
      </div>
    </section>
  );
}
