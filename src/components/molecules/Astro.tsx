// import { useState, useEffect } from "react";
// import axios from "axios";
// import AstroCard from "../atoms/AstroCard";
// import Spinner from "../atoms/Spinner";

// interface AstroDataItem {
//   url?: string;
//   title?: string;
//   explanation?: string;
//   date?: string;
// }

// const Astro = () => {
//   const [astroData, setAstroData] = useState<AstroDataItem | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "https://api.nasa.gov/planetary/apod",
//           {
//             params: {
//               api_key: import.meta.env.REACT_APP_NASA_API_KEY,
//             },
//           }
//         );
//         setAstroData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col mx-4 md:mx-8 my-10">
//       <div className="flex items-center justify-center py-6">
//         <p className="text-[1.1rem] md:text-2xl font-bold">The Astronomy Picture of Today</p>
//       </div>

//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="flex flex-col">
//           <div className="flex flex-row items-center justify-between mx-4 rounded-t-lg"></div>
//           <div className="flex flex-col">
//             {astroData && (
//               <AstroCard
//                 mediaUrl={astroData.url || ""}
//                 title={astroData.title || ""}
//                 explanation={astroData.explanation || ""}
//                 date={astroData.date || ""}
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Astro;

import { useState, useEffect } from "react";
import axios from "axios";
import AstroCard from "../atoms/AstroCard";
import Spinner from "../atoms/Spinner";

interface AstroDataItem {
  url?: string;
  title?: string;
  explanation?: string;
  date?: string;
}

const Astro = () => {
  const [astroData, setAstroData] = useState<AstroDataItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: import.meta.env.VITE_REACT_APP_NASA_API_KEY,
            },
          }
        );
        setAstroData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col mx-4 md:mx-8 my-10">
      <div className="flex items-center justify-center py-6">
        <p className="text-[1.1rem] md:text-2xl font-bold">The Astronomy Picture of Today</p>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between mx-4 rounded-t-lg"></div>
          <div className="flex flex-col">
            {astroData && (
              <AstroCard
                mediaUrl={astroData.url || ""}
                title={astroData.title || ""}
                explanation={astroData.explanation || ""}
                date={astroData.date || ""}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Astro;
