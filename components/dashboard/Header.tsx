"use client"
import { Search } from 'lucide-react';

const Header = () => {

  return (
    <div className="p-5 bg-white shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex items-center gap-2 p-2 border rounded-md max-w-lg">
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="outline-none"
        />
      </div>
      <div>
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">
          Join Membership just for $99.9
        </h2>
      </div>
    </div>
  );
};

export default Header;
