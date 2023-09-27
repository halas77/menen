import { Items } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="m-5 p-8 flex">
      <div className="grid sm:grid-cols-2 xl:grid-cols-5 justify-between gap-8 mx-auto">
        {Items.map((item) => (
          <div key={item.label} className="bg-zinc-300 text-slate-800 py-2 px-10 rounded-md">
            <Image src={item.image} alt="Item Image" width={200} height={100}/>
            <h2 className="font-semibold text-xl font-sans text-center py-5">{item.label}</h2>
            <p className="font-bold text-slate-600 text-xl text-center">$ {item.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
