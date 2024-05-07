import React from "react";

interface GalleryCardProps {
  mediaUrl?: string;
  title?: string;
  isVideo?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  mediaUrl,
  title,
  isVideo = false,
}) => {
  return (
    <div className="w-[300px] max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      {isVideo ? (
        <div className="relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={mediaUrl}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img className="w-full h-64" src={mediaUrl} alt={title} />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GalleryCard;
