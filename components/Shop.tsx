"use client";

import { Items } from "@/constants/constants";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";

const Shop = () => {
  const Catagories = ["All", "Nike", "Adidas", "Puma", "Vans"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCompany, setSearchCompany] = useState("");

  const filteredItems = Items.filter(
    (item) =>
      selectedCategory === "All" ||
      (item.company.toLowerCase() === selectedCategory.toLowerCase())
  );

  const searchedItems = Items.filter(
    (item) =>
      searchCompany === "" ||
      item.category.toLowerCase().includes(searchCompany.toLowerCase())
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="#shop" className="w-full my-10">
      <div className="pb-10 flex justify-center">
        <h2 className="p-4 text-2xl border-b-2 border-sky-300 font-extrabold text-slate-800">
          Featured Fashions
        </h2>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for products (e.g. sneaker, flat )"
          value={searchCompany}
          onChange={(e) => setSearchCompany(e.target.value)}
          className="bg-slate-300 mx-2 py-5 px-10 rounded-full outline-none w-1/2"
        />
        <button>
          <AiOutlineSearch size={30} className="" />
        </button>
      </div>
      <div className="hidden xl:flex justify-center mt-10 gap-8">
        {Catagories.map((catagory) => (
          <button
            key={catagory}
            onClick={() => handleCategoryChange(catagory)}
            className={`${
              selectedCategory === catagory
                ? "bg-sky-200 text-slate-900"
                : " text-gray-800 bg-zinc-200 hover:bg-zinc-300 ease-in-out duration-200"
            } w-20 rounded-sm h-8 font-semibold text-sm`}
          >
            {catagory}
          </button>
        ))}
      </div>

      <div className="m-5 p-8 flex">
        <div className="grid sm:grid-cols-2 xl:grid-cols-5 justify-between gap-8 mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-50 text-slate-800 py-2 px-10 rounded-md shadow-xl border border-zinc-200"
            >
              <Image src={item.img} alt="Item Image" width={200} height={100} />
              <h2 className="font-semibold text-xl font-sans text-center py-5">
                {item.title}
              </h2>
              <div className="flex my-3 text-xs">
                <AiFillStar className=" text-yellow-600" />
                <AiFillStar className=" text-yellow-600" />
                <AiFillStar className=" text-yellow-600" />
                <AiFillStar className=" text-yellow-600" /> {item.reviews}
              </div>
              <p className="font-semibold flex justify-between">
                <del className="text-slate-500 text-sm">{item.prevPrice}</del>{" "}
                <span className=" text-slate-700">${item.newPrice}</span>
                <button>
                  <AiOutlineShoppingCart size={22} className="" />
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="m-5 p-8 flex">
        <div className="grid sm:grid-cols-2 xl:grid-cols-5 justify-between gap-8 mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-50 text-slate-800 py-2 px-10 rounded-md shadow-xl border border-zinc-200"
            >
              <Image src={item.img} alt="Item Image" width={200} height={100} />
              <h2 className="font-semibold text-xl font-sans text-center py-5">
                {item.title}
              </h2>
              <div className="flex my-3 text-xs">
                <AiFillStar className=" text-yellow-600" />
                <AiFillStar className=" text-yellow-600" />
                <AiFillStar className=" text-yellow-600" />
                <AiFillStar className=" text-yellow-600" /> {item.reviews}
              </div>
              <p className="font-semibold flex justify-between">
                <del className="text-slate-500 text-sm">{item.prevPrice}</del>{" "}
                <span className=" text-slate-700">${item.newPrice}</span>
                <button>
                  <AiOutlineShoppingCart size={22} className="" />
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
