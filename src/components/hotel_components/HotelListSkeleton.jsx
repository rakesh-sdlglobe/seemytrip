import "./HotelListSkeleton.css";

const SkeletonCard = () => (
  <div className="skeleton-card">
        <div className="skeleton-image" />
    <div className="skeleton-content">
      <div className="skeleton-title" />
      <div className="skeleton-text" />
      <div className="skeleton-text short" />
      <div className="skeleton-text" />
      <div className="skeleton-text short" />
      <div className="skeleton-text" />
      <div className="skeleton-text short" />
    </div>
  </div>
);

const HotelListSkeleton = ({ count = 6 }) => (
  <div className="skeleton-list">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default HotelListSkeleton;
