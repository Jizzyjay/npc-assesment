import React from "react";

interface GalleryCardProps {
  mediaUrl?: string;
  title?: string;
  mediaType?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  mediaUrl,
  title,
  mediaType,
}) => {
  return (
    <div className=" max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      {mediaType === "video" ? (
        <div className="relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={mediaUrl}
            title={title}
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <img
          className="w-full h-64 object-cover"
          src={mediaUrl}
          alt={title}
          loading="lazy"
        />
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
