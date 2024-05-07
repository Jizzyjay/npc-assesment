import { useState, useEffect } from 'react';
import axios from 'axios';
import AstroCard from '../atoms/AstroCard';
import Spinner from '../atoms/Spinner';

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
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
          params: {
            api_key: 'jqhhqRYoeijaUTN0TIX6rzPbng6FH44fbIidrglh',
          },
        });
        setAstroData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen w-full mx-4 my-6 p-2">
      <div className="bg-[#fff] flex items-center justify-center">
        <p>Astronomy Picture of the Day</p>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col">
          <div className="bg-white p-4 flex flex-row items-center justify-between border-b mx-4 rounded-t-lg">
            {/* Add your header content here */}
          </div>
          <div className="flex flex-col">
            {astroData && (
              <AstroCard
                imageUrl={astroData.url || ''}
                title={astroData.title || ''}
                explanation={astroData.explanation || ''}
                date={astroData.date || ''}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Astro;
