import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-3xl animate-pulse">
      <div className="flex flex-col space-y-6">
        {/* Train Details Header */}
        <div className="flex justify-between items-center">
          <div className="h-5 bg-gray-200 rounded w-40"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>

        {/* Train Details Body */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border border-gray-200 rounded-lg space-y-3">
            <div className="h-4 bg-gray-200 rounded w-36"></div>
            <div className="h-5 bg-gray-200 rounded w-48"></div>
            <div className="h-3 bg-gray-200 rounded w-24"></div>
          </div>
        ))}

        {/* Footer Action Buttons */}
        <div className="flex justify-between space-x-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-8 bg-gray-200 rounded w-24"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
