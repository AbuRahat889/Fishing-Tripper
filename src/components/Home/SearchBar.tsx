import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="w-full max-w-5xl mx-auto -mt-20">
      <div className="bg-white rounded-full pl-[57px] py-3 pr-3 shadow-lg mt-8 flex justify-between items-center">
        <div className="flex flex-grow space-x-4">
          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Where
            </label>
            <input
              type="text"
              placeholder="Search destinations"
              className="mt-1 w-full text-[#474747]"
            />
          </div>
          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Date
            </label>
            <input
              type="date"
              className="mt-1 w-full text-[#474747]"
              placeholder="Select date"
            />
          </div>

          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Who
            </label>
            <input
              type="text"
              placeholder="How many guests?"
              className="mt-1 w-full  focus:ring "
            />
          </div>
          <div>
            <label className="block text-[18px] font-normal text-[#474747]">
              Private or shared?
            </label>
            <select
              defaultValue={"What type of booking?"}
              className="mt-1 w-full text-[#474747] "
            >
              <option>What type of booking?</option>
              <option>Private</option>
              <option>Shared</option>
            </select>
          </div>
        </div>

        <div className="bg-[#0037ff]  text-white rounded-full h-16 w-16 flex justify-center items-center">
          <IoIosSearch className="text-3xl" />
        </div>
      </div>
    </div>
  );
}
