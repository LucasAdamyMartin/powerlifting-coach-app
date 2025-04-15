import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="border-1 border-gray-500 w-90 p-1 pl-5 rounded-full flex flex-row items-center gap-2">
            <Search className="size-5 text-gray-500"/>
            <input placeholder="search ..." className="focus:outline-none focus:ring-0 border-none"></input>
        </div>
    )
  }
  
