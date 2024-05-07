import React from "react";

interface AstroCardProps {
  mediaUrl?: string;
  title?: string;
  explanation?: string;
  date?: string;
}

const AstroCard: React.FC<AstroCardProps> = ({
  mediaUrl,
  title,
  explanation,
  date,
}) => {
  // Check if mediaUrl ends with common video extensions
  const isVideo = /\.(mp4|ogg|webm)$/i.test(mediaUrl || "");

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row gap-3">
        {isVideo ? ( // If it's a video
          <div className="w-full h-64">
            <video
              src={mediaUrl}
              title="space-vid"
              className="w-full h-full object-cover object-center rounded-md"
              controls
            />
          </div>
        ) : (
          // If it's an image
          <img
            src={mediaUrl}
            alt={title}
            className="w-full h-[450px] object-cover object-center rounded-md"
          />
        )}
        <div className="flex flex-col px-4 gap-6">
          <div>
            <h2 className="text-[1.1rem] md:text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-sm font-medium mt-2">{date}</p>
          </div>
          <p className="text-gray-600 text-base mt-2 max-w-[900px]">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
