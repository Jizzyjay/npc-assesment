import React from "react";

interface AstroCardProps {
  imageUrl?: string;
  title?: string;
  explanation?: string;
  date?: string;
}

const AstroCard: React.FC<AstroCardProps> = ({
  imageUrl,
  title,
  explanation,
  date,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover object-center"
      /> */}
      <div className="flex flex-row gap-10">
        <iframe
        title="space-vid"
        // frameBorder="0"
        src={imageUrl}
        allow="autoplay"
        allowFullScreen
        className="h-96 w-auto rounded-md shadow-md "
              />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base mt-2">{explanation}</p>
        <p className="text-gray-500 text-xs mt-2">{date}</p>
      </div>

      </div>
      
    </div>
  );
};

export default AstroCard;
