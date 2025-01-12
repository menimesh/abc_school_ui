import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex item-center justify-between  p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full rind-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="searchBar" width={16} height={16} />
        <input
          type="text"
          placeholder="Search...."
          name=""
          id=""
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Nimesh</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
export default Navbar;
