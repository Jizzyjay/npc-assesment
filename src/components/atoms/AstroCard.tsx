import React from "react";

interface AstroCardProps {
  mediaUrl?: string;
  title?: string;
  explanation?: string;
  date?: string;
  mediaType?: string;
}

const AstroCard: React.FC<AstroCardProps> = ({
  mediaUrl,
  title,
  explanation,
  date,
  mediaType,
}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row gap-3">
        {mediaType === "video" ? (
          <div className="w-full">
            <iframe
              src={mediaUrl}
              title={title}
              className="w-full h-full rounded-md"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={mediaUrl}
            alt={title}
            className="w-full h-[450px] rounded-md"
            loading="lazy"
          />
        )}
        <div className="flex flex-col gap-2">
          <>
            <h2 className="text-[1.1rem] md:text-xl font-semibold text-gray-800">
              {title}
            </h2>
            <p className="text-sm font-medium">{date}</p>
          </>
          <p className="text-gray-600 text-base mt-2 max-w-[1000px] md:max-h-80 overflow-scroll">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
