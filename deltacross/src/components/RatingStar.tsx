interface Props {
  rating: number;
  max_rating: number;
  min_rating: number;
  star_count: number;
}

const RatingStar = (prop: Props) => {
  const rating =
    isNaN(prop.rating) || prop.rating === undefined ? 5 : prop.rating;
  const max_rating =
    isNaN(prop.max_rating) || prop.max_rating === undefined
      ? 5
      : prop.max_rating;
  const min_rating =
    isNaN(prop.min_rating) || prop.min_rating === undefined
      ? 0
      : prop.min_rating;
  const star_count =
    isNaN(prop.star_count) || prop.star_count === undefined
      ? 5
      : prop.star_count;
  const percentage = ((rating - min_rating) / (max_rating - min_rating)) * 100;

  return (
    <div className="ratingStar">
      {Array.from({ length: star_count }).map((_, index) => (
        <span key={index} className="material-symbols-outlined">
          star
        </span>
      ))}
      <div className="color" style={{ width: `${percentage}%` }}>
        {Array.from({ length: star_count }).map((_, index) => (
          <span
            key={index}
            className="material-symbols-outlined material-symbols-filled"
          >
            star
          </span>
        ))}
      </div>
    </div>
  );
};

export default RatingStar;
