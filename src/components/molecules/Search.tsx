import { useState } from "react";
import AstroCard from "../atoms/AstroCard";

const Search = () =>
  // { onSearch }
  {
    const [searchDate, setSearchDate] = useState("");

    //   const handleSearch = () => {
    //     // Perform validation if needed
    //     // For simplicity, let's assume the date format is valid
    //     onSearch(searchDate);
    //   };

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-[1.1rem] md:text-2xl font-bold pt-4">Search Atronomic Picture by date</h3>
        <p>
          You can search any astronomic events you want by date. Just input the
          date below
        </p>
        <div className="flex items-center justify-center">
          <input
            type="date"
            value={searchDate}
            placeholder="Search events by date"
            onChange={(e) => setSearchDate(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mr-2"
          />
          <button
            // onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
          >
            Search
          </button>
        </div>
        <AstroCard mediaUrl="" title="" explanation="" date="" />
      </div>
    );
  };

export default Search;
