import { Catagories } from "@/constants/constants";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";

const Shop = () => {
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
          placeholder="Search for products"
          className="bg-slate-300 mx-2 py-5 px-10 rounded-full outline-none w-1/2"
        />
        <button>
          <AiOutlineSearch size={30} className="" />
        </button>
      </div>
      <div className="hidden xl:flex justify-center mt-10 gap-8">
        {Catagories.map((item) => (
          <button
            key={item.label}
            className="bg-zinc-300 text-slate-900 font-semibold text-sm rounded-md px-4 py-2 flex "
          >
            {item.label}
          </button>
        ))}
      </div>
      <Card/>
    </section>
  );
};

export default Shop;
