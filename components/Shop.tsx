import { AiOutlineSearch } from "react-icons/ai";

const Shop = () => {
  return (
    <section id="section" className="w-full my-10">
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
    </section>
  );
};

export default Shop;
