import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../atoms/Spinner";
import GalleryCard from "../atoms/GalleryCard";

interface GalleryDataItem {
  url?: string;
  title?: string;
  date?: string;
  media_type?: string;
}

const Gallery = () => {
  const [galleryDataList, setGalleryDataList] = useState<GalleryDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: import.meta.env.VITE_REACT_APP_NASA_API_KEY,
              count: 16, // Fetch multiple items for the gallery
            },
          }
        );
        setGalleryDataList(response.data);
        setError(null); // Reset error state if data is fetched successfully
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later."); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col mx-4 md:mx-8 mt-8 mb-[12rem] overflow-scroll">
      <div className="flex items-center justify-center pb-6">
        <p className="text-[1.1rem] md:text-2xl font-bold">
          Astronomy Picture Gallery
        </p>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="flex items-center justify-center text-red-600">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryDataList.map((galleryData, index) => (
            <GalleryCard
              key={index}
              mediaUrl={galleryData.url || ""}
              title={galleryData.title || ""}
              mediaType={galleryData.media_type || ""}// Check if the media is a video
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
