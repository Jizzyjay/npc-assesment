import { useState } from "react";
import axios from "axios";
import AstroCard from "../atoms/AstroCard";
import Spinner from "../atoms/Spinner";

interface searchDataItem {
  url?: string;
  title?: string;
  explanation?: string;
  date?: string;
}

const Search = () => {
  const [searchDate, setSearchDate] = useState("");
  const [searchData, setSearchData] = useState<searchDataItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_NASA_API_KEY,
          date: searchDate, // Add the search date to the API request params
        },
      });
      setSearchData(response.data);
      setError(null); // Reset error state if data is fetched successfully
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 mb-[12rem] overflow-scroll">
      <h3 className="text-[1.1rem] md:text-2xl font-bold pt-4">
        Search Astronomic Picture by date
      </h3>
      <p className="text-sm md:text-base text-center">
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
          onClick={handleSearch}
          disabled={!searchDate}
          className="bg-gray-800 hover:bg-blue-600 text-white font-bold py-1 px-4 cursor-pointer rounded"
        >
          Search
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : searchData ? (
        <AstroCard
          mediaUrl={searchData.url || ""}
          title={searchData.title || ""}
          explanation={searchData.explanation || ""}
          date={searchData.date || ""}
        />
      ) : null}
    </div>
  );
};

export default Search;
