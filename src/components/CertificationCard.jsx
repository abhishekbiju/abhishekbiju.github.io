// src/components/CertificationCard.jsx
import React from "react";

const CertificationCard = ({ image, title, description, date }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      {/* Adjusted class names for smaller image */}
      <div className="flex justify-center p-4">
        <img className="max-w-xs rounded" src={image} alt={`${title} certification`} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        {date && (
          <p className="text-gray-500 text-sm mt-2">
            <strong>Date:</strong> {date}
          </p>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;

