import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="w-full max-w-5xl mx-auto -mt-20">
      <div className="bg-white rounded-xl mx-5 lg:rounded-full pl-5 lg:pl-[57px] py-3 pr-3 shadow-lg mt-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="grid  grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-5 ">
          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Where
            </label>
            <input
              type="text"
              placeholder="Search destinations"
              className="mt-1 w-full text-[#474747] outline-none"
            />
          </div>
          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Date
            </label>
            <input
              type="date"
              className="mt-1 w-full text-[#474747] outline-none"
              placeholder="Select date"
            />
          </div>

          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Who
            </label>
            <input
              type="number"
              placeholder="How many guests?"
              className="mt-1 w-full  outline-none "
            />
          </div>

          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Private or shared?
            </label>
            <select
              defaultValue={"What type of booking?"}
              className="mt-1 w-full text-[#474747] outline-none"
            >
              <option>What type of booking?</option>
              <option>Private</option>
              <option>Shared</option>
            </select>
          </div>
        </div>

        <div className="bg-[#0037ff] cursor-pointer hover:bg-[#FF9500] transition-colors duration-300 ease-in-out  text-white rounded-xl lg:rounded-full h-16 w-16 flex justify-center items-center">
          <IoIosSearch className="text-3xl" />
        </div>
      </div>
    </div>
  );
}
