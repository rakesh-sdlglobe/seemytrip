import React from 'react';

const skeletonStyle = {
  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%)',
  backgroundSize: '400% 100%',
  animation: 'skeleton-loading 1.2s ease-in-out infinite',
  borderRadius: '6px',
  marginBottom: '16px',
};

const SkeletonBlock = ({ height, width, style = {} }) => (
  <div
    style={{
      ...skeletonStyle,
      height,
      width: width || '100%',
      ...style,
    }}
  />
);
//dsfhgsdfhg

const HotelsFiltersSkeleton = () => (
  <aside className="filters-skeleton p-3 bg-white rounded-3 mb-4" style={{ minWidth: 250, maxWidth: 350 }}>
    <style>{`
      @keyframes skeleton-loading {
        0% { background-position: 100% 50%; }
        100% { background-position: 0 50%; }
      }
    `}</style>
    {/* Title */}
    <SkeletonBlock height={28} width="60%" style={{ marginBottom: 24 }} />
    {/* Price Filter */}
    <SkeletonBlock height={18} width="40%" />
    <SkeletonBlock height={10} width="90%" />
    <SkeletonBlock height={10} width="80%" />
    <SkeletonBlock height={10} width="70%" style={{ marginBottom: 20 }} />
    {/* Star Rating */}
    <SkeletonBlock height={18} width="50%" />
    <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
      {[...Array(5)].map((_, i) => (
        <SkeletonBlock key={i} height={24} width={24} style={{ borderRadius: '50%' }} />
      ))}
    </div>
    {/* Amenities */}
    <SkeletonBlock height={18} width="50%" />
    {[...Array(4)].map((_, i) => (
      <SkeletonBlock key={i} height={12} width={`${80 - i * 10}%`} />
    ))}
    {/* More Filters */}
    <SkeletonBlock height={18} width="40%" style={{ marginTop: 24 }} />
    {[...Array(3)].map((_, i) => (
      <SkeletonBlock key={i} height={12} width={`${70 - i * 10}%`} />
    ))}
  </aside>
);

export default HotelsFiltersSkeleton;
